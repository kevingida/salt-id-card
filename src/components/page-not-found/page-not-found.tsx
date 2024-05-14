import "./page-not-found.css";
import { ChangeEvent, useState } from "react";
import { CtaButton, Form } from "../../components";

export const PageNotFound = () => {
  const [input, setInput] = useState({
    date: "",
    course: "",
    location: "sthlm",
  });
  const [dateValid, setDateValid] = useState(false);

  const inputForm = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const { date, course, location } = input;

  const baseUrl = import.meta.env.VITE_BASE_URL;
  const queryParams = `/vite-react-router/?date=${date}&name=${course}&location=${location}`;

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
      <a href={baseUrl + queryParams}>
        <CtaButton
          variant="primary"
          disabled={!dateValid}
        >
          Redirect
        </CtaButton>
      </a>
      <span>{baseUrl + queryParams}</span>
    </div>
  );
};
