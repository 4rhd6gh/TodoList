import React from "react";
import styled from "styled-components";
import { CgMathPlus } from "react-icons/cg";

const AddButton = styled.button`
  position: absolute;
  bottom: 0px;
  left: 50%;
  border-radius: 50%;
  border: none;
  height: 80px;
  width: 80px;
  z-index: 5;
  background-color: ${(props) => (props.adding ? "#C0CBFF" : "#5b7db1")};
  transform: ${(props) =>
    props.adding
      ? "translate(-50%, 50%) rotate(45deg)"
      : "translate(-50%, 50%)"};
  transition: all 0.125s ease-in 0s;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => (props.adding ? "#d9dfff;" : "#2d3e58;")};
  }
`;

const AddIcon = styled(CgMathPlus)`
  color: white;
  width: 60px;
  height: 60px;
`;

const AddTodo = ({ adding, setAdding }) => {
  // console.log("Addtodo렌더링 됨");
  return (
    <AddButton
      onClick={() => {
        adding ? setAdding(false) : setAdding(true);
      }}
      adding={adding}
    >
      <AddIcon />
    </AddButton>
  );
};

export default AddTodo;
