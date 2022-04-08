import React, { useContext, useRef } from "react";
import { TodoDispatch } from "../../../jinho";

const TodoInput = React.memo(function TodoInput() {
  const dispatch = useContext(TodoDispatch);
  const inputRef = useRef();
  return (
    <>
      <input type="text" ref={inputRef} placeholder="할 일을 입력하세요" />
      <button
        onClick={() =>
          dispatch({
            type: "ADD_TODO",
            todos: { todoName: inputRef.current.value, todoStatus: "doing" },
          })
        }
      >
        추가
      </button>
    </>
  );
});

export default TodoInput;
