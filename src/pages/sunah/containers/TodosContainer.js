import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { create, createAsync } from "../modules/todos";
import TodoTemplate from "../components/TodoTemplate";
import TodoHead from "../components/TodoHead";
import TodoCreate from "../components/TodoCreate";
import TodoList from "../components/TodoList";

function TodosContainer() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onCreate = (text) => dispatch(create(text)); // redux-thunk 없이 사용
  // const onCreate = (text) => dispatch(createAsync(text));

  return (
    <TodoTemplate>
      <TodoHead todos={todos} />
      <TodoList todos={todos} />
      <TodoCreate onCreate={onCreate} />
    </TodoTemplate>
  );
}
export default TodosContainer;
