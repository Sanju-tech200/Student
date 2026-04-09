import { useState, useEffect } from "react";

function StudentForm({ selectedStudent, saveStudent, clearSelection }) {
  const [student, setStudent] = useState({
    name: "",
    age: "",
    email: "",
  });

  useEffect(() => {
    if (selectedStudent) {
      setStudent(selectedStudent);
    }
  }, [selectedStudent]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveStudent(student);
    setStudent({ name: "", age: "", email: "" });
  };

  return (
    <div>
      <h2>{student.id ? "Update Student" : "Add Student"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={student.name}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={student.age}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={student.email}
          onChange={handleChange}
          required
        />

        <button type="submit">
          {student.id ? "Update" : "Add"}
        </button>

        {student.id && (
          <button type="button" onClick={clearSelection}>
            Cancel
          </button>
        )}
      </form>
    </div>
  );
}

export default StudentForm;