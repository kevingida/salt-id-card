import { useLocation } from "react-router-dom";

export const Home = () => {
  const course = new URLSearchParams(useLocation().search).get("name");
  const startDate = new URLSearchParams(useLocation().search).get("date");

  return (
    <>
      <h2>{course}</h2>
      <h2>{startDate}</h2>
    </>
  );
};
