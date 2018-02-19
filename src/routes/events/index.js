const express = require('express');
const { Validator } = require('express-json-validator-middleware');

const router = express.Router();

const eventsStore = require('../../stores/events');
const eventSchema = require('../../schemas');

const validator = new Validator({
  allErrors: true
});

// Add /:id subroute
router.use(require('./id'));

// Set up route
router.route('/')
  // Get all events
  .get((req, res) => {
    eventsStore.find({}, (err, data) => {
      if (err) {
        console.log(err);
      }
      // Send data
      res.send(data);
    });
  })
  // Add new event to the store
  .post(validator.validate({ body: eventSchema }), (req, res) => {
    eventsStore.insert(req.body, (err, newEvent) => {
      res.send(newEvent);
    });
  });

module.exports = router;
