import React from "react";
import TodoDate from "./TodoDate";
import TodoCount from "./TodoCount";

const Header = (props) => {
  return (
    <>
      <TodoDate />
      <TodoCount count={props.count} />
    </>
  );
};

export default Header;
