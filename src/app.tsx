import "./app.css";
import {PageNotFound} from "./components";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {Authentication} from "./components/authentication";

function App() {
  const course = new URLSearchParams(useLocation().search).get("name");
  const startDate = new URLSearchParams(useLocation().search).get("date");
  const [missingParams, setMissingParams] = useState(false);

  useEffect(() => {
    if (course == null || startDate == null) {
      setMissingParams(true);
    }
  }, []);

  return missingParams
    ? <PageNotFound/>
    : <div className="root">
      <Authentication/>
    </div>;
}

export default App;
