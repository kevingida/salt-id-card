import "./App.css";
import { useLocation } from "react-router-dom";
import { Main, PageNotFound } from "./components";
import { useEffect, useState } from "react";

function App() {
  const course = new URLSearchParams(useLocation().search).get("name");
  const startDate = new URLSearchParams(useLocation().search).get("date");
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log(course);
    if (course == null || startDate == null) {
      setError(true);
    }
  }, []);

  return <div className="root">{error ? <PageNotFound /> : <Main />}</div>;
}

export default App;
