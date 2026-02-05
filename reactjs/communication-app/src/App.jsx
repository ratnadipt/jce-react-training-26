import { useState } from "react";
import "./App.css";
import AddStudent from "./comps/AddStudent";
import Student from "./comps/Student";

function App() {
  let [students, setStudents] = useState([
    {
      name: "Ratnadip",
      city: "Gondia",
      contactNo: "+91 9970388246",
    },
    {
      name: "John",
      city: "California",
      contactNo: "+91 457865789",
    },
    {
      name: "Tanvi",
      city: "Yavatmal",
      contactNo: "+91 4785689789",
    },
    {
      name: "Bhumika",
      city: "Nagpur",
      contactNo: "+91 478568956",
    },
  ]);

  function getStudentData(data) {
    console.log(data);
    // add -> students [state variable] : change -> UI update
    setStudents(function (oldData) {
      return [...oldData, data];
    });
    console.log(students);
  }

  return (
    <div>
      <AddStudent handleData={getStudentData} />
      <hr />
      {students.map(function (student, index) {
        return (
          <Student
            key={index}
            stdName={student.name}
            stdCity={student.city}
            stdMobile={student.contactNo}
          />
        );
      })}
    </div>
  );
}

export default App;
