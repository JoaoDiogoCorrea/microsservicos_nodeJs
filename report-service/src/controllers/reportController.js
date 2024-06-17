const reportService = require('../services/reportService');

const getStudentReport = async (req, res) => {
  try {
    const report = await reportService.generateStudentReport(req.params.studentId);
    res.status(200).json(report);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getStudentReport,
};
