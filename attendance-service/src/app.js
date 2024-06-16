// app.js
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('../config/database');
const attendanceRoutesRoutes = require('./routes/attendanceRoutes');

const app = express();

connectDB();

app.use(bodyParser.json());
app.use('/attendance', attendanceRoutesRoutes);

module.exports = app;
