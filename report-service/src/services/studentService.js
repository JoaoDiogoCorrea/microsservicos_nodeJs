// services/studentService.js
const axios = require('axios');
const config = require('../../config/config');

const getStudentById = async (studentId) => {
  const response = await axios.get(`${config.studentServiceURL}/${studentId}`);
  return response.data;
};

module.exports = {
  getStudentById,
};
