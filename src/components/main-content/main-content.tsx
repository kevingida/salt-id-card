import {useUser} from "@clerk/clerk-react";
import {MainContentLeft, Title, MainContentRight, Navbar} from "../../components";
import "./main-content.css";
import {useEffect, useState} from "react";
import {User} from "../../types.ts";

export const MainContent = () => {
  const {user, isSignedIn} = useUser();
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
  }, [isSignedIn]);
  return (
    <>
      <Navbar/>
      {userData &&
          <section className="logged-in__section">
              <Title content="Your ID Card Snapshot"/>
              <div className="logged-in__wrapper">
                  <MainContentLeft name={userData.firstName}/>
                  <MainContentRight userData={userData}/>
              </div>
          </section>}
    </>
  );
};
