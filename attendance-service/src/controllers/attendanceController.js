const attendanceService = require('../services/attendanceService');

const markAttendance = async (req, res) => {
  try {
    const attendance = await attendanceService.markAttendance(req.body);
    res.status(201).json(attendance);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAttendance = async (req, res) => {
  try {
    const attendance = await attendanceService.getAttendance();
    res.status(200).json(attendance);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAttendanceByStudentId = async (req, res) => {
  try {
    const attendance = await attendanceService.getAttendanceByStudentId(req.params.studentId);
    if (!attendance) {
      return res.status(404).json({ error: 'Attendance not found' });
    }
    res.status(200).json(attendance);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  markAttendance,
  getAttendance,
  getAttendanceByStudentId,
};
