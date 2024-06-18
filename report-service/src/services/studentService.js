// services/studentService.js
const axios = require('axios');
const config = require('../../config/config');

const getAllStudents = async () => {
  const response = await axios.get(config.studentServiceURL);
  return response.data;
};

const getStudentById = async (studentId) => {
  const response = await axios.get(`${config.studentServiceURL}/${studentId}`);
  return response.data;
};

module.exports = {
  getStudentById,
  getAllStudents,
};
