const Attendance = require('../models/attendance');

const markAttendance = async (data) => {
  const attendance = new Attendance(data);
  await attendance.save();
  return attendance;
};

const getAttendance = async () => {
  return await Attendance.find();
};

const getAttendanceByStudentId = async (studentId) => {
  return await Attendance.find({ studentId });
};

module.exports = {
  markAttendance,
  getAttendance,
  getAttendanceByStudentId,
};
