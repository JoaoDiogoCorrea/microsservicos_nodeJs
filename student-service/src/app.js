// app.js
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('../config/database');
const studentRoutes = require('./routes/studentRoutes');

const app = express();

connectDB();

app.use(bodyParser.json());
app.use('/students', studentRoutes);

module.exports = app;
