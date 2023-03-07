# hub-ruuvi-collector

Simple collector for RuuviTag sensor data. Pushes sensor data to cloud with fixed interval.

```
git clone https://github.com/artoaaltonen/hub-ruuvi-collector.git
cd hub-ruuvi-collector
npm install
node index.js
```

## Hub API

Sensor data is available as tab separated values at
- `https://hub.artoaaltonen.com/sensor/{sensorId}/temperature`
- `https://hub.artoaaltonen.com/sensor/{sensorId}/humidity`

Where `{sensorId}` is RuuviTag MAC address in lowercase without any colons.
