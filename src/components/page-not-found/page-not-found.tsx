import "./page-not-found.css";
import { ChangeEvent, useState } from "react";
import { CtaButton, Form } from "../../components";
import { useNavigate } from "react-router-dom";

export const PageNotFound = () => {
  const [input, setInput] = useState({
    date: "",
    course: "",
    location: "sthlm",
  });
  const [dateValid, setDateValid] = useState(false);
  const redirect = useNavigate();

  const inputForm = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const { date, course, location } = input;
  // const baseUrl = "http://localhost:5173/vite-react-router";
  const baseUrl = "https://kevingida.github.io/vite-react-router";
  const queryParams = `/?date=${date}&name=${course}&location=${location}`;

  const handleSubmit = () => {
    redirect(queryParams);
  };

  const isDateValid = (e: ChangeEvent<HTMLInputElement>) => {
    const year = +e.target.value.split("-")[0];
    if (year < 2018) {
      setDateValid(false);
      return;
    }
    setDateValid(true);
  };

  return (
    <div className="page-not-found__container">
      <div className="page-not-found">
        Invalid url Page not found. Please check the url and try again.
      </div>
      <Form
        onChange={inputForm}
        checkIfDateValid={isDateValid}
        dateValid={dateValid}
      />
      <CtaButton variant="primary" onClick={handleSubmit} disabled={!dateValid}>
        Redirect
      </CtaButton>
      <span>{baseUrl + queryParams}</span>
    </div>
  );
};
