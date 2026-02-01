import "./App.css";

function App() {
  let students = ["Tanvi", "Tulsi", "Mayuri", "Gautami", "Mrudula", "Bhavna"];

  return (
    <div>
      {students.map(function (std) {
        // processing
        return <h1>{std}</h1>;
      })}
    </div>
  );
}

export default App;

/**
 * let a = "";
  const x = 60;

  /** if else 
  if (x > 10) {
    a = <h1>Hello, Students!</h1>;
  } else {
    a = <h1>Hello, Engineers!</h1>;
  }


  /** Using Switch 
  switch (x) {
    case 1:
      a = <h1>Good Morning!</h1>;
      break;
    case 2:
      a = <h1>Good Afternoon!</h1>;
      break;
    case 3:
      a = <h1>Good, Evening!</h1>;
      break;
    default:
      a = <h1>not valid time!</h1>;
      break;
  }

  let x = 32;

  return <div>{x > 10 ? <h1>Hello</h1> : <h1>Hi</h1>}</div>;
 */
