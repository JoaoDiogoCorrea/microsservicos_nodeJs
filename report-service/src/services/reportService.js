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

const generateAllStudentsReport = async () => {
  const students = await studentService.getAllStudents();

  const reports = await Promise.all(students.map(async (student) => {
    const attendance = await attendanceService.getAttendanceByStudentId(student._id);
    return {
      student,
      attendance,
    };
  }));

  return reports;
};

module.exports = {
  generateStudentReport,
  generateAllStudentsReport,
};
