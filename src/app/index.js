const express = require('express');
const bodyParser = require('body-parser');

// Set up express
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = app;
