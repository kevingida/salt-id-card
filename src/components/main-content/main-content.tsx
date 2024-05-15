import {useUser} from "@clerk/clerk-react";
import {MainContentLeft, Title, MainContentRight, Navbar} from "../../components";
import "./main-content.css";
import {useEffect, useState} from "react";
import {User} from "../../types.ts";

export const MainContent = () => {
  const {user} = useUser();
  const [userData, setUserData] = useState<User>();
  useEffect(() => {
    if (user) {
      setUserData({
        email: user.primaryEmailAddress?.emailAddress,
        firstName: user.firstName,
        fullName: user.fullName,
        image: user.externalAccounts[0].imageUrl,
      });
    }
  }, []);
  return (
    <>
      <Navbar/>
      {userData &&
          <section className="main-content__section">
              <Title content="Your ID Card"/>
              <div className="main-content__wrapper">
                  <MainContentLeft name={userData.firstName}/>
                  <MainContentRight userData={userData}/>
              </div>
          </section>}
    </>
  );
};
