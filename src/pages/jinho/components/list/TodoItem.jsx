import React, { useContext } from "react";
import { TodoDispatch } from "../../../jinho";

const TodoItem = React.memo(function TodoItem(props) {
  const { todoId, todoName, todoStatus } = props;
  const dispatch = useContext(TodoDispatch);
  return (
    <li>
      <input
        type="checkbox"
        checked={todoStatus === "done" ? true : false}
        onChange={() => dispatch({ type: "UPDATE_TODO", id: todoId })}
      />
      <span>{todoName}</span>
    </li>
  );
});

export default TodoItem;
