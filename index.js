require('dotenv').config({ path: './.env' });
const express = require('express');
const app = express();

const port = 5678;

app.get('/map', (req, res) => {
  const city = req.query.city;
  const state = req.query.state;

  const { MAPS_API_KEY } = process.env;

  res.set('Content-Type', 'text/html');

  const url = `https://www.google.com/maps/embed/v1/place?key=${MAPS_API_KEY}&q=${city}+${state}`
  res.send(`<iframe width='450' height='250' frameborder='0' style='border:0' src=${url} allowfullscreen> </iframe>`)
});

app.listen(port, () => {
  console.log(`Listening at port ${port}`)
});
