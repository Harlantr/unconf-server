const confSchema = {
  type: 'object',
  required: [
    'owner',
    'roomList',
    'startTime',
    'endTime'
  ],
  properties: {
    creator: {
      type: 'string'
    },
    roomList: {
      type: 'array'
    },
    startTime: {
      type: 'date'
    },
    endTime: {
      type: 'date'
    }
  }
};

module.exports = confSchema;
