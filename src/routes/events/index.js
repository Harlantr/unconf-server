const express = require('express');
const { Validator } = require('express-json-validator-middleware');

const router = express.Router();

const eventsStore = require('../../stores/events');
const eventSchema = require('../../schemas/event');

const validator = new Validator({
  allErrors: true
});

// Add /:id subroute
router.use(require('./id'));

// Set up route
router.route('/')
  // Get all events
  .get((req, res, next) => {
    eventsStore.find({}, (err, data) => {
      // Throw error
      if (err) next(err);

      if (data.length) {
        res.send(data);
      } else {
        // Throw new 404 for events not found
        res.status(404);
        next('No events found');
      }
    });
  })
  // Add new event to the store
  .post(
    // Validate against schema
    validator.validate({ body: eventSchema }),
    (req, res, next) => {
      eventsStore.insert(req.body, (err, newEvent) => {
      // Throw error
        if (err) next(err);
        res.send(newEvent);
      });
    }
  );

module.exports = router;
