import React from "react";
import Navber from "./Navber";
import InputField from "./InputField";
import DisplayTodo from "./DisplayTodo";

const Main = () => {
  return (
    <React.Fragment>
      <Navber />
      <InputField />
      <DisplayTodo />
    </React.Fragment>
  );
};

export default Main;
