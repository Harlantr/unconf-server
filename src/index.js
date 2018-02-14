const app = require('./app');
const { Validator } = require('express-json-validator-middleware');

const { eventStore } = require('./stores');
const { eventSchema } = require('./schemas');

const validator = new Validator({
  allErrors: true
});

app.route('/events')
  .get((req, res) => {
    // Get all events
    eventStore.find({}, (err, data) => {
      if (err) {
        console.log(err);
      }
      // Send data
      res.send(data);
    });
  })
  .post(validator.validate({ body: eventSchema }), (req, res) => {
    // Add new event to the store
    eventStore.insert(req.body, (err, newEvent) => {
      res.send(newEvent);
    });
  });

// Global error handler
app.use((err, req, res, next) => {
  // JSON Schema Validation
  if (err.name === 'JsonSchemaValidationError') {
    res.status(400);
    res.json({
      message: 'Invalid request',
      validationErrors: err.validationErrors.body
    });
  } else {
    // Throw error to default error handler
    next(err);
  }
});

app.listen(5000, () => {});
