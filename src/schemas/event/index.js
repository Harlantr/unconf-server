const conferenceConfig = require('../../constants/conf-cfg');

const eventSchema = {
  type: 'object',
  required: [
    'creator',
    'title',
    'description',
    'tags',
    'type',
    'difficulty',
    'startTime',
    'room'
  ],
  properties: {
    creator: {
      type: 'string'
    },
    title: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    tags: {
      type: 'array'
    },
    type: {
      type: 'string',
      enum: [
        'Workshop',
        'Presentation',
        'Discussion'
      ]
    },
    difficulty: {
      type: 'string',
      enum: [
        'Beginner',
        'Intermediate',
        'Advanced',
        'Expert'
      ]
    },
    startTime: {
      type: 'string'
    },
    room: {
      type: 'string',
      enum: conferenceConfig.roomList
    }
  }
};

module.exports = eventSchema;
