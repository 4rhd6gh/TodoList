import React, { useCallback, useReducer } from "react";
import Header from "./components/header";
import TodoList from "./components/list";
import TodoInput from "./components/input";

const initialState = {
  todos: [
    {
      id: 1,
      todoName: "오늘의 할 일",
      todoStatus: "done",
    },
    {
      id: 2,
      todoName: "Blog 글쓰기",
      todoStatus: "doing",
    },
    {
      id: 3,
      todoName: "github 잔디심기",
      todoStatus: "doing",
    },
  ],
};

function reducer(state, action) {
  console.log(action, state);
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: state.todos.concat({
          ...action.todos,
          id: state.todos.length + 1,
        }),
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case "UPDATE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id
            ? {
                ...todo,
                todoStatus: todo.todoStatus === "done" ? "doing" : "done",
              }
            : todo
        ),
      };
    default:
      return state;
  }
}

function countTodo(todos) {
  return todos.filter((todo) => todo.todoStatus === "doing").length;
}

export const TodoDispatch = React.createContext(null);
export const TodoState = React.createContext(null);

const Jinho = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { todos } = state;

  const countTodoFunction = useCallback(() => countTodo(todos), [todos]);

  return (
    <TodoState.Provider value={state}>
      <TodoDispatch.Provider value={dispatch}>
        <div className="container">
          <Header count={countTodoFunction(todos)} />
          <TodoList />
          <TodoInput />
        </div>
      </TodoDispatch.Provider>
    </TodoState.Provider>
  );
};

export default Jinho;
