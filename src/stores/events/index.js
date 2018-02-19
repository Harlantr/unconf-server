const DataStore = require('nedb');
const dataStoreLocation = require('../../constants/data-store-location');

const eventsStore = new DataStore({
  filename: dataStoreLocation,
  autoload: true
});

module.exports = eventsStore;
