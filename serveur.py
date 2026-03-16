from flask import Flask, request, jsonify
import os

app = Flask(__name__)

temperature = 0

@app.route("/data")
def data():
    global temperature
    temperature = request.args.get("temp", 0)
    print("Température reçue :", temperature)
    return "OK", 200

@app.route("/temperature")
def get_temperature():
    return jsonify({"temperature": temperature})


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
