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
        'workshop',
        'presentation',
        'discussion'
      ]
    },
    difficulty: {
      type: 'string',
      enum: [
        'beginner',
        'intermediate',
        'advanced',
        'expert'
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
