import {MainContentLeft, Title, MainContentRight, Navbar} from "../../components";
import "./main-content.css";

export const MainContent = () => {
  return (
    <>
      <Navbar/>
          <section className="main-content__section">
              <Title content="Your ID Card"/>
              <div className="main-content__wrapper">
                  <MainContentLeft />
                  <MainContentRight />
              </div>
          </section>
    </>
  );
};
