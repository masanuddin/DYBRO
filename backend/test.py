# import cv2

# cap = cv2.VideoCapture("http://192.168.18.82:81/stream")

# for i in range(200):   # ❗ JANGAN while True
#     ret, frame = cap.read()
#     if not ret:
#         print("Frame gagal")
#         break

#     frame = cv2.flip(frame, 1)

#     cv2.imshow("Cam", frame)
#     if cv2.waitKey(1) & 0xFF == ord('q'):
#         break

# cap.release()
# cv2.destroyAllWindows()

import paho.mqtt.client as mqtt

BROKER = "broker.hivemq.com"
PORT = 1883
TOPIC = "sic/dibimbing/DoaIbuMenyertai/cam"

def on_connect(client, userdata, flags, rc):
    print("🟢 Connected to MQTT")
    client.subscribe(TOPIC)
    print("📡 Subscribed to:", TOPIC)

def on_message(client, userdata, msg):
    print("📥 CAM MQTT:", msg.topic, msg.payload.decode())

client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message

client.connect(BROKER, PORT, 60)
client.loop_forever()
