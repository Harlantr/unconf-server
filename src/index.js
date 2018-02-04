const app = require('./app');
const { eventsStore } = require('./stores');

app.route('/events')
  .get((req, res) => {
    // Get all events
    eventsStore.find({}, (err, data) => {
      if (err) {
        console.log(err);
      }
      // Send data
      res.send(data);
    });
  })
  .post((req, res) => {
    // Add new event to the store
    eventsStore.insert(req.body, (err, newEvent) => {
      res.send(newEvent);
    });
  });

app.listen(5000, () => {});
