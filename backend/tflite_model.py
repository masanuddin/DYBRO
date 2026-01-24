import numpy as np
import cv2
import tensorflow as tf
import os

# Load TFLite model
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "vww_96_grayscale_quantized.tflite")

interpreter = tf.lite.Interpreter(model_path=MODEL_PATH)
interpreter.allocate_tensors()

input_details = interpreter.get_input_details()
output_details = interpreter.get_output_details()

IMG_SIZE = 96

def predict_focus(image_bgr):
    """
    image_bgr: OpenCV image (BGR)
    return: (status, confidence)
    """

    # 1️⃣ PREPROCESS (HARUS SESUAI TRAINING)
    gray = cv2.cvtColor(image_bgr, cv2.COLOR_BGR2GRAY)
    resized = cv2.resize(gray, (IMG_SIZE, IMG_SIZE))

    input_data = resized.astype(np.float32)

    # Quantized model handling
    if input_details[0]["dtype"] == np.uint8:
        input_data = input_data.astype(np.uint8)

    input_data = np.expand_dims(input_data, axis=0)
    input_data = np.expand_dims(input_data, axis=-1)

    interpreter.set_tensor(input_details[0]["index"], input_data)
    interpreter.invoke()

    output = interpreter.get_tensor(output_details[0]["index"])[0]

    # 2️⃣ POSTPROCESS
    confidence = float(np.max(output))
    predicted_class = int(np.argmax(output))

    status = "focused" if predicted_class == 0 else "distracted"

    return status, round(confidence, 3)