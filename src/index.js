const express = require('express');

const app = express();

const eventService = require('./services/events');

app.get('/events', (req, res) => {
  res.send(eventService.getEvents());
});

app.listen(5000, () => {
  console.log('App running on port 5000');
});
