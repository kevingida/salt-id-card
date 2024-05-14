import {CardInfo} from "../../card-info";

type Props={
  name: string | null
}
export const MainContentLeft = ({name}: Props) => {
  return (
    <CardInfo name={name} />
  );
};
