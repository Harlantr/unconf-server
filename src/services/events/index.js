const fs = require('fs');

const getEvents = () => fs.readFileSync('./data/data.json', { encoding: 'utf-8' }, (err, data) => {
  if (err) {
    console.error(err);
  }
  return data;
});

const addEvent = () => ({});

module.exports = {
  getEvents,
  addEvent,
};
