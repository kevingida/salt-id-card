import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Main } from "./pages/Main.tsx";
import { Home } from "./pages/Home.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/vite-react-router/",
    element: <App />,
    children: [
      {
        path: "/vite-react-router/",
        element: <Home />,
      },
      {
        path: "/vite-react-router/main",
        element: <Main />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
