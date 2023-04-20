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
    "timestamp": 0,
    "mining": False,
    "latitude": 0,
    "longitude": 0,
    "heading_deg": 0,
    "depth_m": 0,
    "length_m": 0,
}

#team = os.environ.get('The Diggeridoos', 'TBCTest')
i = 0
while True:
    response = requests.get(url)


    if response.status_code == 200:
        data = response.json()

        telegram['timestamp'] = time.time()
        telegram['mining'] = data['mining']
        telegram["latitude"] = data['latitude']
        telegram["longitude"] = data['longitude']
        telegram["heading_deg"] = data['heading_deg']
        telegram["depth_m"] = data['depth_m']
        telegram["length_m"] = data['length_m']
    
    else:
        print("Error fetching JSON")
    if not client.publish(f'nabc23/TheDiggeridoos', json.dumps(telegram)):
        print('Failed to publish')

    time.sleep(0.5)
    print('Loop')
    i += 1