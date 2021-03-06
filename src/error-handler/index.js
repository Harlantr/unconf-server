const globalErrorHandler = (err, req, res, next) => {
  // JSON Schema Validation
  if (err.name === 'JsonSchemaValidationError') {
    res.status(400);
    res.json({
      message: 'Invalid request',
      validationErrors: err.validationErrors.body
    });
  } else {
    // Throw error to default error handler
    res.status(500).json(err);
    next();
  }
};

module.exports = globalErrorHandler;
