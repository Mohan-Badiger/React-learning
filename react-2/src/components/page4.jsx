import { useState } from "react";

const Page4 = ()=> {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    course: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setStudent({
      ...student,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(student);
    alert("Student data submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Student Registration</h2>

      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={student.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={student.email}
        onChange={handleChange}
      />

      <input
        type="number"
        name="age"
        placeholder="Enter age"
        value={student.age}
        onChange={handleChange}
      />

      <select
        name="gender"
        value={student.gender}
        onChange={handleChange}
      >
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>

      <select
        name="course"
        value={student.course}
        onChange={handleChange}
      >
        <option value="">Select Course</option>
        <option>React</option>
        <option>Node</option>
        <option>Full Stack</option>
      </select>

      <label>
        <input
          type="checkbox"
          name="agree"
          checked={student.agree}
          onChange={handleChange}
        />
        I agree to terms
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Page4;
