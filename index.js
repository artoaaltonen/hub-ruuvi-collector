#!/usr/bin/env node

const ruuvi = require('node-ruuvitag');
const axios = require('axios');

let data = {};

function collect()
{
  const postbody = data;

  data = {};

  if (Object.keys(postbody).length === 0) {
    return;
  }

  console.log('Collect sensor data', JSON.stringify(postbody));

  axios.post('https://hub.artoaaltonen.com/collect/many', postbody, {
    timeout: 1000,
  }).catch(error => {
    console.log(error.message);
  });
}

ruuvi.on('found', tag => {
  console.log('Sensor ' + tag.id + ' | https://hub.artoaaltonen.com/sensor/' + tag.id + '/temperature | https://hub.artoaaltonen.com/sensor/' + tag.id + '/humidity');

  tag.on('updated', sensordata => {
    data[tag.id] = {
      temperature: sensordata.temperature,
      humidity: sensordata.humidity,
    };
  });
});

setInterval(collect, 60000);
