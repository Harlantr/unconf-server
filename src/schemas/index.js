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
    'room',
  ],
  properties: {
    creator: {
      type: 'string',
    },
    title: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    tags: {
      type: 'string',
    },
    type: {
      type: 'string',
      enum: [
        'workshop',
        'presentation',
        'discussion',
      ],
    },
    difficulty: {
      type: 'string',
      enum: [
        'beginner',
        'intermediate',
        'advanced',
        'expert',
      ],
    },
    startTime: {
      type: 'string',
    },
    room: {
      type: 'string',
    },
  },
};

module.exports = {
  eventSchema,
};
