const DataStore = require('nedb');

const eventsStore = new DataStore({
  filename: './data/events.db',
  autoload: true,
});

module.exports = {
  eventsStore,
};
