import "./App.css";
import { Link, Outlet, useLocation } from "react-router-dom";

function App() {
  const course = new URLSearchParams(useLocation().search).get("name");
  const startDate = new URLSearchParams(useLocation().search).get("date");

  return (
    <>
      <h2>{course}</h2>
      <h2>{startDate}</h2>
    </>
  );
}

export default App;
