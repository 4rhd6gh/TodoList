import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1; /*영역 전체 차지*/
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const TodoList = ({ todos, onRemove, onEdit, onToggle }) => {
  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          done={todo.done}
          text={todo.text}
          onRemove={onRemove}
          onEdit={onEdit}
          onToggle={onToggle}
        />
      ))}
    </TodoListBlock>
  );
};

export default React.memo(TodoList);
