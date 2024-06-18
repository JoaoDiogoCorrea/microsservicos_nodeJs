const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

router.get('/student/:studentId', reportController.getStudentReport);
router.get('/students', reportController.getAllStudentsReport);

module.exports = router;
