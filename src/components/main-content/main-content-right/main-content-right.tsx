import { IdCard, CtaButton } from "../../../components";
import { handlePrint, isDisabled } from "../../../utils/utils.ts";
import { useRef } from "react";
import { User } from "../../../types.ts";
import "./main-content-right.css";
import { useLocation } from "react-router-dom";
import { Tooltip } from "react-tooltip";

type Props = {
  userData: User;
};

export const MainContentRight = ({ userData }: Props) => {
  const printRef = useRef<HTMLDivElement>(null);
  const date = new URLSearchParams(useLocation().search).get("date");
  const name = new URLSearchParams(useLocation().search).get("name");
  const location = new URLSearchParams(useLocation().search).get("location");
  const isDisable = isDisabled(date!, name!, location!);

  return (
    <div className="id-card__wrapper">
      <IdCard userData={userData} ref={printRef} />
      <a
        className="clipboard-tooltip"
        data-tooltip-id={isDisable ? "my-tooltip" : ""}
        data-tooltip-content="Don't mess with the url!"
      >
        <CtaButton
          onClick={() => handlePrint(userData, printRef)}
          variant="info"
          disabled={isDisable}
        >
          Download my ID
        </CtaButton>
      </a>
      <Tooltip id="my-tooltip" />
    </div>
  );
};
