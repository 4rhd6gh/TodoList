import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { create, remove, edit, toggle } from "../modules/todos";
import TodoTemplate from "../components/TodoTemplate";
import TodoHead from "../components/TodoHead";
import TodoCreate from "../components/TodoCreate";
import TodoList from "../components/TodoList";

function TodosContainer() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onCreate = (text) => dispatch(create(text));
  const onRemove = (id) => dispatch(remove(id));
  const onEdit = (id, text) => dispatch(edit(id, text));
  const onToggle = (id) => dispatch(toggle(id));

  return (
    <TodoTemplate>
      <TodoHead todos={todos} />
      <TodoList
        todos={todos}
        onRemove={onRemove}
        onEdit={onEdit}
        onToggle={onToggle}
      />
      <TodoCreate onCreate={onCreate} />
    </TodoTemplate>
  );
}
export default TodosContainer;
