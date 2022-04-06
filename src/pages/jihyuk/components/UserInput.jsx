// 사용자 input

import React, { useState } from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
  bottom: 0px;
  left: 0px;
  position: absolute;
  display: ${(props) => (props.adding ? "block" : "none")};
  transition: all 1.25s ease-in 0s;
`;

const InputForm = styled.form`
  background: rgb(248, 249, 250);
  padding: 32px 32px 72px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid rgb(233, 236, 239);
  width: 100%;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid rgb(222, 226, 230);
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

const UserInput = ({ adding, setAdding, todos, setTodos }) => {
  // console.log("UserInput 렌더링 됨");
  // input 에 입력되는 값
  const [userInput, setUserInput] = useState("");

  //엔터를 눌렀을 때 submit이벤트를 통해 배열조작하는 handler
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (userInput === "") return;
    else setTodos([...todos, { title: userInput, checked: false }]);
    setAdding(false);
  };

  return (
    <InputContainer adding={adding}>
      <InputForm onSubmit={onSubmitHandler}>
        <Input
          placeholder="할 일을 입력하고, 엔터를 눌러주세요 :)"
          onChange={(e) => setUserInput(e.target.value)}
        />
      </InputForm>
    </InputContainer>
  );
};

export default UserInput;
