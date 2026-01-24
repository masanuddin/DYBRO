from fastapi import FastAPI, UploadFile, File
import numpy as np
import cv2
import json
import paho.mqtt.client as mqtt

from tflite_model import predict_focus

app = FastAPI()

@app.get("/")
def root():
    return {"status": "backend running"}

# MQTT CONFIG
MQTT_BROKER = "broker.hivemq.com"
MQTT_PORT = 1883
MQTT_TOPIC = "sic/dibimbing/DoaIbuMenyertai/cam"

mqtt_client = mqtt.Client()
mqtt_client.connect(MQTT_BROKER, MQTT_PORT, 60)
mqtt_client.loop_start()

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    print("📸 FRAME RECEIVED")

    img_bytes = await file.read()
    np_img = np.frombuffer(img_bytes, np.uint8)
    image = cv2.imdecode(np_img, cv2.IMREAD_COLOR)
    image = cv2.flip(image, 0)

    status, confidence = predict_focus(image)

    payload = {
        "status": status,
        "confidence": float(confidence)
    }

    print("📡 MQTT PUBLISH:", payload)

    mqtt_client.publish(
        MQTT_TOPIC,
        json.dumps(payload)
    )

    return payload