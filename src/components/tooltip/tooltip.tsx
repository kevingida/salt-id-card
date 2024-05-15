import { Tooltip as ReactTooltip } from "react-tooltip";

type Props = {
  children: React.ReactNode;
  content: string;
  disabled?: boolean;
  href?: string
};

export const Tooltip = ({ children, content, disabled, href}: Props) => {
  return (
    <>
      <a
        className="clipboard-tooltip"
        data-tooltip-id={disabled ? "my-tooltip" : ""}
        data-tooltip-content={content}
        href={href ? href : "#"}
      >
        {children}
      </a>
      <ReactTooltip id="my-tooltip" />
    </>
  );
};
