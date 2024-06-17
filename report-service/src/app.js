// app.js
const express = require('express');
const bodyParser = require('body-parser');
const reportRoutes = require('./routes/reportRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/report', reportRoutes);

module.exports = app;
