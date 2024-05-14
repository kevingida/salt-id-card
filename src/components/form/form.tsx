import  {ChangeEvent, ChangeEventHandler} from "react";
import "./form.css";
import {listOfCourses, listOfLocations} from "../../constants.ts";

type Props = {
  onChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
  checkIfDateValid: (e: ChangeEvent<HTMLInputElement>) => void,
  dateValid: boolean
};
export const Form = ({onChange, checkIfDateValid, dateValid}: Props) => {
  return (
    <form className="form">
      <label htmlFor="date">Start date:</label>
      <input type="date" name="date" onChange={onChange} onInput={checkIfDateValid}></input>
      {!dateValid && <span className="form-date__error">Invalid date. Please verify that year is later than 2018</span>}
      <label htmlFor="course">Course:</label>
      <select name="course" onChange={onChange} >
        <option defaultValue="">Select Course</option>
        {listOfCourses.map(({id, name, value}) => <option value={name} key={id}>{value}</option>)}
      </select>
      <label htmlFor="course">Location:</label>
      <select name="location" onChange={onChange}>
        {/* If there will be more options add line below */}
        {/*<option defaultValue="">Select Location</option>*/}
        {listOfLocations.map(({id, name, value}) => <option value={name} key={id}>{value}</option>)}
      </select>
    </form>
  );
};