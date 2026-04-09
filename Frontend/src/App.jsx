import { useEffect, useState } from "react";
import {
  getStudents,
  getStudentById,
  addStudent,
  updateStudent,
  deleteStudent,
  deleteAllStudents,
} from "./services/api";

import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [searchId, setSearchId] = useState("");

  // ✅ FETCH ALL STUDENTS
  const fetchStudents = async () => {
    try {
      const res = await getStudents();
      setStudents(res.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  // ✅ LOAD DATA ON START
  useEffect(() => {
    fetchStudents();
  }, []);

  // ✅ SEARCH BY ID
  const handleSearch = async () => {
    if (!searchId) return;

    try {
      const res = await getStudentById(searchId);
      setStudents([res.data]); // show only one
    } catch {
      alert("Student not found");
    }
  };

  // ✅ SHOW ALL (FIXED)
  const handleReset = async () => {
    setSearchId("");
    await fetchStudents(); // 🔥 important
  };

  // ✅ ADD / UPDATE
  const saveStudent = async (student) => {
    try {
      if (student.id) {
        await updateStudent(student.id, student);
      } else {
        await addStudent(student);
      }
      await fetchStudents();
      setSelectedStudent(null);
    } catch (error) {
      console.error("Error saving student:", error);
    }
  };

  // ✅ DELETE ONE
  const handleDelete = async (id) => {
    try {
      await deleteStudent(id);
      await fetchStudents();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

 const handleDeleteAll = async () => {
  try {
    await deleteAllStudents(); // 1️⃣ delete from backend

    setStudents([]);           // 2️⃣ clear UI immediately 🔥

    await fetchStudents();     // 3️⃣ refresh from backend

  } catch (error) {
    console.error("Error deleting all:", error);
  }
};

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student CRUD App</h1>

      {/* 🔍 SEARCH */}
      <div>
        <input
          type="number"
          placeholder="Enter Student ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleReset}>Show All</button>
      </div>

      {/* 🔥 DELETE ALL */}
      <button onClick={handleDeleteAll}>
        Delete All Students
      </button>

      {/* FORM */}
      <StudentForm
        selectedStudent={selectedStudent}
        saveStudent={saveStudent}
        clearSelection={() => setSelectedStudent(null)}
      />

      {/* LIST */}
      <StudentList
        students={students}
        onEdit={setSelectedStudent}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;