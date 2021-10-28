require('dotenv').config({ path: './.env' });
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 5678;

app.get('/map', (req, res) => {
  const streetAddr = req.query.streetAddr;
  const city = req.query.city;
  const state = req.query.state;

  let formattedCity = city.replace(/ /g, '+');

  const { MAPS_API_KEY } = process.env;

  let url = `https://www.google.com/maps/embed/v1/place?key=${MAPS_API_KEY}&q=${formattedCity}+${state}`

  if (streetAddr) {
    let formattedStreet = streetAddr.replace(/ /g, '+');
    url = `https://www.google.com/maps/embed/v1/place?key=${MAPS_API_KEY}&q=${formattedStreet}+${formattedCity}+${state}`
  }

  if (city && state) {
    res.set('Content-Type', 'text/html');
    res.status(200)
    res.send(
      `<iframe 
        width='450' 
        height='250' 
        frameborder='0' 
        style='border:0' 
        src=${url} 
        allowfullscreen> </iframe>`
    );
  } else {
    res.status(400);
    res.send('Please send request with the required query parameters of city and state.')
  }
});

app.listen(port, () => {
  console.log(`Listening at port ${port}`)
});
