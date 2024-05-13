import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <Link to="/vite-react-router/">Home</Link>
        {" | "}
        <Link to="/vite-react-router/main">Main</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
