from flask import Flask, request, jsonify

app = Flask(__name__)

temperature = 0

@app.route("/")
def home():
    print("Route / appelée", flush=True)
    return "ESP32 IoT Server Running", 200

@app.route("/data")
def data():
    global temperature
    print("Route /data appelée", flush=True)
    temperature = request.args.get("temp", 0)
    print("Température reçue :", temperature, flush=True)
    return "OK", 200

@app.route("/temperature")
def get_temperature():
    print("Route /temperature appelée", flush=True)
    return jsonify({"temperature": temperature})
