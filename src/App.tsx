import "./App.css";
import { useLocation } from "react-router-dom";
import { Main } from "./components";

function App() {
  const course = new URLSearchParams(useLocation().search).get("name");
  const startDate = new URLSearchParams(useLocation().search).get("date");

  return (
    <div className="root">
      <h2>{course}</h2>
      <h2>{startDate}</h2>
      <Main />
    </div>
  );
}

export default App;
