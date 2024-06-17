const studentService = require('./studentService');
const attendanceService = require('./attendanceService');

const generateStudentReport = async (studentId) => {
  const student = await studentService.getStudentById(studentId);
  const attendance = await attendanceService.getAttendanceByStudentId(studentId);

  return {
    student,
    attendance,
  };
};

module.exports = {
  generateStudentReport,
};
