from flask import Flask, request, jsonify
import os

app = Flask(__name__)

temperature = 0

@app.route("/")
def home():
    return "ESP32 IoT Server Running", 200

@app.route("/data")
def data():
    global temperature
    temperature = request.args.get("temp", 0)
    print("Température reçue :", temperature, flush=True)
    return "OK", 200

@app.route("/temperature")
def get_temperature():
    return jsonify({"temperature": temperature})

# IMPORTANT pour Railway
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8080))
    app.run(host="0.0.0.0", port=port)
