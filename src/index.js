const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Route handlers
app.use('/events', require('./routes/events'));

// Global error handler
app.use(require('./error-handler'));

app.listen(5000, () => {});
