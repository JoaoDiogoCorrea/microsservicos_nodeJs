// services/attendanceService.js
const axios = require('axios');
const config = require('../../config/config');

const getAttendanceByStudentId = async (studentId) => {
  const response = await axios.get(`${config.attendanceServiceURL}/student/${studentId}`);
  return response.data;
};

module.exports = {
  getAttendanceByStudentId,
};
