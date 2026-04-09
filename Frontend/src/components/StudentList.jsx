function StudentList({ students, onEdit, onDelete }) {
  return (
    <div>
      <h2>Student List</h2>

      {students.length === 0 ? (
        <p>No Students Found</p>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.age}</td>
                <td>{s.email}</td>
                <td>
                  <button onClick={() => onEdit(s)}>Edit</button>
                  <button onClick={() => onDelete(s.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StudentList;