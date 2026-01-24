import cv2
import numpy as np
import tensorflow as tf
import paho.mqtt.client as mqtt
import time
import json

# =============================
# MQTT CONFIG
# =============================
BROKER = "broker.hivemq.com"
PORT = 1883
TOPIC = "sic/dibimbing/DoaIbuMenyertai/cam"

client = mqtt.Client()
client.connect(BROKER, PORT, 60)
print(f"✅ MQTT connected to {BROKER}:{PORT}, topic: {TOPIC}")

# =============================
# LOAD TFLITE MODEL
# =============================
MODEL_PATH = "vww_96_grayscale_quantized.tflite"

interpreter = tf.lite.Interpreter(model_path=MODEL_PATH)
interpreter.allocate_tensors()

input_details = interpreter.get_input_details()
output_details = interpreter.get_output_details()

print("📐 Input shape:", input_details[0]["shape"])

# =============================
# LABELS (SAMA KAYAK NOTEBOOK)
# =============================
labels = ["Fokus", "Gak Fokus"]
try:
    with open("labels.txt", "r") as f:
        labels = [line.strip() for line in f.readlines()]
except FileNotFoundError:
    pass

# =============================
# CAMERA STREAM (ESP32-CAM)
# =============================
CAMERA_URL = "http://192.168.18.82:81/stream"
cap = cv2.VideoCapture(CAMERA_URL)

if not cap.isOpened():
    print("❌ Gagal buka ESP32-CAM stream")
    exit()

print("📷 ESP32-CAM stream connected")
print("👉 Tekan 'q' untuk keluar")

last_sent = 0  # throttle MQTT (biar gak spam)

# =============================
# MAIN LOOP
# =============================
while True:
    ret, frame = cap.read()
    if not ret:
        print("❌ Frame gagal")
        break

    # =============================
    # FLIP (BIAR ORIENTASI BENER)
    # =============================
    frame = cv2.flip(frame, 1)

    # =============================
    # PREPROCESS (SAMA PERSIS)
    # =============================
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    input_shape = input_details[0]["shape"]
    h, w = input_shape[1], input_shape[2]

    img = cv2.resize(gray, (w, h))
    img = img.astype(np.float32) / 255.0
    img = np.expand_dims(img, axis=(0, -1))

    # =============================
    # INFERENCE
    # =============================
    interpreter.set_tensor(input_details[0]["index"], img)
    interpreter.invoke()

    output = interpreter.get_tensor(output_details[0]["index"])
    pred_idx = int(np.argmax(output))
    confidence = float(np.max(output))

    label_text = f"{labels[pred_idx]} ({confidence*100:.1f}%)"
    color = (0, 255, 0) if pred_idx == 0 else (0, 0, 255)

    # =============================
    # DRAW LABEL (NO BOX)
    # =============================
    cv2.putText(
        frame,
        label_text,
        (20, 40),
        cv2.FONT_HERSHEY_SIMPLEX,
        0.5,
        color,
        2,
        cv2.LINE_AA,
    )

    # =============================
    # MQTT PUBLISH (2 DETIK)
    # =============================
    now = time.time()
    if now - last_sent > 2:
        payload = {
            "status": "focused" if pred_idx == 0 else "distracted",
            "confidence": round(confidence, 3),
        }

        client.publish(TOPIC, json.dumps(payload))
        print("📡 MQTT PUBLISH:", payload)

        last_sent = now

    # =============================
    # SHOW WINDOW
    # =============================
    cv2.imshow("ESP32 CAM - Focus Detection", frame)

    if cv2.waitKey(1) & 0xFF == ord("q"):
        break

# =============================
# CLEANUP
# =============================
cap.release()
cv2.destroyAllWindows()
client.disconnect()
print("🚪 Closed all connections")
