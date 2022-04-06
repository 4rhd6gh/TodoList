// 할일에 해당하는 컴포넌트

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsCircle } from "react-icons/bs";
import { BsCheckCircle } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

// 개별 할일 컨테이너
const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  &:hover {
    div:nth-of-type(2) {
      visibility: visible;
    }
  }
`;

const NotDoneIcon = styled(BsCircle)`
  width: 34px;
  height: 34px;
  color: rgb(206, 212, 218);
  &:hover {
    cursor: pointer;
  }
`;

const DoneIcon = styled(BsCheckCircle)`
  width: 34px;
  height: 34px;
  color: #5b7db1;
  &:hover {
    cursor: pointer;
  }
`;

const TodoTitle = styled.div`
  font-size: 21px;
  margin-left: 20px;
  color: ${(props) => (props.isDone ? "rgb(206, 212, 218)" : "black")};
  /* color: rgb(206, 212, 218); */
`;

const DeleteButtonContainer = styled.div`
  visibility: hidden;
  margin-left: auto;
`;

const DeleteButton = styled(MdDelete)`
  width: 27px;
  height: 27px;

  color: rgb(206, 212, 218);
  &:hover {
    color: #ff6b6b;
    cursor: pointer;
  }
`;

const ListItem = ({ title, index, todos, setTodos, checked }) => {
  console.log(`${index + 1}번째 할일 렌더링 됨`);
  // 할 일 완료 여부 체크하기 위해 클릭여부 담는 state
  const [isDone, setIsDone] = useState(checked);

  // 클릭 이벤트에 대해, isDone 상태 변경해주는 함수
  const handleIsDone = () => {
    isDone ? setIsDone(false) : setIsDone(true);
  };
  // deleteButton을 클릭했을 때, 배열을 조작
  const onClickHandler = () => {
    const newTodo = todos.filter((todo) => todos.indexOf(todo) !== index);
    setTodos(newTodo);
  };

  console.log(checked);
  return (
    <ItemContainer>
      {isDone ? (
        <DoneIcon onClick={handleIsDone} />
      ) : (
        <NotDoneIcon onClick={handleIsDone} />
      )}
      <TodoTitle isDone={isDone}>{title}</TodoTitle>
      <DeleteButtonContainer>
        <DeleteButton onClick={onClickHandler} />
      </DeleteButtonContainer>
    </ItemContainer>
  );
};

export default ListItem;
