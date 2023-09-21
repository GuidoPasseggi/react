import "./App.css";
import Job from "./components/Job";

function App() {
  // const jobProps = {
  //   salary: 1000,
  //   position: "Junior",
  //   company: "Google",
  // };

  return (
    <>
      <div className='App'>from App component</div>
      <Job salary={1000} position='Junior' company='Google' />
    </>
  );
}

export default App;
