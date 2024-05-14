import {IdCard, CtaButton} from "../../../components";
import {handlePrint, isDisabled} from "../../../utils/utils.ts";
import {useRef} from "react";
import {User} from "../../../types.ts";
import './main-content-right.css'
import {useLocation} from "react-router-dom";

type Props = {
  userData: User
}

export const MainContentRight = ({userData}: Props) => {
  const printRef = useRef<HTMLDivElement>(null);
  const date =  new URLSearchParams(useLocation().search).get("date");
  const name = new URLSearchParams(useLocation().search).get("name");
  const location = new URLSearchParams(useLocation().search).get("location");


  return (
    <div className="id-card__wrapper">
      <IdCard userData={userData} ref={printRef}/>
      <CtaButton
        onClick={() => handlePrint(userData, printRef)}
        variant="info"
        disabled={isDisabled(date!, name!, location!)}
      >
        Download my ID
      </CtaButton>
    </div>
  );
};
