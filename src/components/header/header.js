import { useState } from "react";

import HeaderForm from "../UI/Header/headerForm";
import LoggOutForm from "../UI/Header/LogOutForm";

const Header = () => {
  const [userName, setUserName] = useState("admin");
  const [password, setPassword] = useState("123456");

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = () => {
    if (userName === "admin" && password === "123456") {
      localStorage.setItem("LoggIn", "1");
    }
  };

  const logOutHandler = (event) => {
    localStorage.setItem("LoggIn", "0");
  };

  return (
    <header>
      {localStorage.getItem("LoggIn") === "0" ? (
        <HeaderForm
          userName={userNameHandler}
          password={passwordHandler}
          onSubmit={submitHandler}
        />
      ) : (
        <LoggOutForm onSubmit={logOutHandler} />
      )}
    </header>
  );
};

export default Header;
