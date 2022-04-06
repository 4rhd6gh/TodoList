// 남은 할일 표시하는 컴포넌트

import React from "react";
import styled from "styled-components";

// 남은 할일

const LeftTodoContainer = styled.div`
  margin-top: 30px;
  color: #5b7db1;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const LeftTodo = () => {
  // console.log("LeftTodo 렌더링 됨");
  return <LeftTodoContainer>할 일 개 남음</LeftTodoContainer>;
};

export default LeftTodo;
