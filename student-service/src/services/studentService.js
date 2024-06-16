const Student = require('../models/student');

const createStudent = async (data) => {
  const student = new Student(data);
  await student.save();
  return student;
};

const getStudents = async () => {
  return await Student.find();
};

const getStudentById = async (id) => {
  return await Student.findById(id);
};

const updateStudent = async (id, data) => {
  return await Student.findByIdAndUpdate(id, data, { new: true });
};

const deleteStudent = async (id) => {
  await Student.findByIdAndDelete(id);
};

module.exports = {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};
