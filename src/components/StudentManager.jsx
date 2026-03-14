import { useState } from "react";

function StudentManager() {
  const [students, setStudents] = useState([
    { id: "101", name: "Sree", course: "CSE" },
    { id: "102", name: "Ravi", course: "ECE" },
    { id: "103", name: "Anjali", course: "EEE" },
    { id: "104", name: "Kiran", course: "BCA" },
    { id: "105", name: "Meena", course: "MCA" },
  ]);

  const [newStudent, setNewStudent] = useState({
    id: "",
    name: "",
    course: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({
      ...newStudent,
      [name]: value,
    });
  };

  const addStudent = () => {
    if (
      newStudent.id.trim() === "" ||
      newStudent.name.trim() === "" ||
      newStudent.course.trim() === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    setStudents([...students, newStudent]);

    setNewStudent({
      id: "",
      name: "",
      course: "",
    });
  };

  const deleteStudent = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Student Manager</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="id"
          placeholder="Enter ID"
          value={newStudent.id}
          onChange={handleChange}
          style={{ marginRight: "10px", padding: "8px" }}
        />

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={newStudent.name}
          onChange={handleChange}
          style={{ marginRight: "10px", padding: "8px" }}
        />

        <input
          type="text"
          name="course"
          placeholder="Enter Course"
          value={newStudent.course}
          onChange={handleChange}
          style={{ marginRight: "10px", padding: "8px" }}
        />

        <button onClick={addStudent} style={{ padding: "8px 12px" }}>
          Add Student
        </button>
      </div>

      {students.length === 0 ? (
        <p>No students available</p>
      ) : (
        <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Course</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>
                  <button onClick={() => deleteStudent(student.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StudentManager;