import os
import time
import json
import paho.mqtt.client as mqtt
import sys
import time
import requests

url = "http://localhost:8000/mqtt"  # replace with your URL


# f = open()
# The callback for when the client receives a CONNACK response from the server.
def on_connect(client, userdata, flags, rc):
    print("Connected with result code "+str(rc))

    # Subscribing in on_connect() means that if we lose the connection and
    # reconnect then subscriptions will be renewed.
    client.subscribe("$SYS/#")

# The callback for when a PUBLISH message is received from the server.
def on_message(client, userdata, msg):
    print(msg.topic+" "+str(msg.payload))

client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message

client.username_pw_set(username="nabc", password="qS3#txEwyyJA")

client.connect(
    os.environ.get('MQTT_HOST', '54.193.159.219'), 
    os.environ.get('MQTT_PORT', 1883),
    60
)

telegram = {
    "team": "The Diggeridoos",
    "timestamp": time.time(),
    "mining": True,
    "latitude": 33.921550,
    "longitude": -118.326172,
    "heading_deg": .20420,
    "depth_m": 1.234,
    "length_m": 5.215,
}

#team = os.environ.get('The Diggeridoos', 'TBCTest')
while True:
    response = requests.get(url)

    data = {}
    if response.status_code == 200:
        data = response.json()
    else:
        print("Error fetching JSON")
    if not client.publish(f'nabc23/TheDiggeridoos', json.dumps(telegram)):
        print('Failed to publish')

    time.sleep(0.5)
    print('Loop')