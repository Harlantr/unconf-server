const express = require('express');
const { Validator } = require('express-json-validator-middleware');

const router = express.Router();

const eventsStore = require('../../../stores/events');
const eventSchema = require('../../../schemas/event');

const validator = new Validator({
  allErrors: true
});

router.route('/:id')
  // Get event by id
  .get((req, res, next) => {
    eventsStore.findOne({ _id: req.params.id }, (err, data) => {
      // Throw error
      if (err) next(err);

      if (data) {
        // Return data
        res.send(data);
      } else {
        // Throw new 404 for event not found
        res.status(404);
        next(new Error(`Event id ${req.params.id} not found`));
      }
    });
  })
  // Update event by id
  .put(
    // Validate against schema
    validator.validate({ body: eventSchema }),
    (req, res, next) => {
      eventsStore.update(
        { _id: req.params.id }, req.body, { returnUpdatedDocs: true },
        (err, numUpdated, data) => {
          // Throw error
          if (err) next(err);

          if (numUpdated) {
            // Return data
            res.send(data);
          } else {
            // Throw new 404 for event not found
            res.status(404);
            next(new Error(`Event id ${req.params.id} not found.`));
          }
        }
      );
    }
  )
  // Delte event by id
  .delete((req, res, next) => {
    eventsStore.remove({ _id: req.params.id }, {}, (err, numRemoved) => {
      // Throw error
      if (err) next(err);

      if (numRemoved) {
        res.send();
      } else {
        // Throw new 404 for event not found
        res.status(404);
        next(new Error(`Event id ${req.params.id} not found.`));
      }
    });
  });

module.exports = router;
