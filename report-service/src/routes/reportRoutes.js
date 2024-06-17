const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

router.get('/student/:studentId', reportController.getStudentReport);

module.exports = router;
