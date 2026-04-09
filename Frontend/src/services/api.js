import axios from "axios";

const BASE_URL = "http://localhost:8080/api/students";

// ✅ GET ALL
export const getStudents = () => axios.get(BASE_URL);

// ✅ GET BY ID
export const getStudentById = (id) =>
  axios.get(`${BASE_URL}/${id}`);

// ✅ ADD
export const addStudent = (student) =>
  axios.post(BASE_URL, student);

// ✅ UPDATE
export const updateStudent = (id, student) =>
  axios.put(`${BASE_URL}/${id}`, student);

// ✅ DELETE ONE
export const deleteStudent = (id) =>
  axios.delete(`${BASE_URL}/${id}`);

// ✅ DELETE ALL
export const deleteAllStudents = () =>
  axios.delete(BASE_URL);