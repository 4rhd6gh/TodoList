// 전체 TodoList 포함하는 컴포넌트

import React, { useState, useMemo } from "react";
import styled from "styled-components";
import AddTodo from "./AddTodo";
import LeftTodo from "./LeftTodo";
import ListItem from "./ListItem";
import TodaysDate from "./TodaysDate";
import UserInput from "./UserInput";

// todolist 담는 컨테이너 div
const TodoContainer = styled.div`
  margin: 96px auto 32px;
  height: 768px;
  width: 512px;
  border-radius: 16px;
  background-color: white;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: rgb(0 0 0 / 4%) 0px 0px 8px 0px;
`;

// 날짜 및 남은 할일 부분 컨테이너
const TopPartContainer = styled.div`
  border-bottom: 1px solid rgb(233, 236, 239);
  padding: 48px 32px 24px;
`;

// 할일 목록 컨테이너
const ListContainer = styled.div`
  /* background-color: beige; */
  padding: 20px 32px 48px;
  flex: 1 1 0%;
  overflow-y: auto;
`;

const TodoList = () => {
  // 할 일 추가하는 상태를 관리하는 state
  const [adding, setAdding] = useState(false);

  // 할 일 목록 배열
  const [todos, setTodos] = useState([
    { title: "리액트 공부하기", checked: true },
    { title: "발표자료 준비하기", checked: false },
    { title: "프로젝트 구상하기", checked: false },
  ]);

  // const longList = [];
  // // makeLongList();
  // useMemo(() => {
  //   makeLongList();
  // }, [longList]);
  // console.log(longList);

  // const [todos, setTodos] = useState(longList);

  // function makeLongList(arr) {
  //   for (let i = 1; i <= 200; i++) {
  //     longList.push(`${i}번째 할일`);
  //   }
  // }

  return (
    <TodoContainer>
      <TopPartContainer>
        <TodaysDate />
        <LeftTodo />
      </TopPartContainer>
      <ListContainer>
        {todos.map((todo) => {
          return (
            <ListItem
              key={todos.indexOf(todo)}
              index={todos.indexOf(todo)}
              title={todo.title}
              setTodos={setTodos}
              todos={todos}
              checked={todo.checked}
            />
          );
        })}
      </ListContainer>
      <UserInput
        adding={adding}
        todos={todos}
        setAdding={setAdding}
        setTodos={setTodos}
      />
      <AddTodo adding={adding} setAdding={setAdding} />
    </TodoContainer>
  );
};

export default TodoList;
