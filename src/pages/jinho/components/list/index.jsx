import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoState } from "../../../jinho";

const TodoList = () => {
  const { todos } = useContext(TodoState);

  return (
    <>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todoId={todo.id}
          todoName={todo.todoName}
          todoStatus={todo.todoStatus}
        />
      ))}
    </>
  );
};

export default TodoList;
