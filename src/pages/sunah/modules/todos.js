const CREATE = "todos/CREATE";
const REMOVE = "todos/REMOVE";
const EDIT = "todos/EDIT";
const TOGGLE = "todos/TOGGLE";

let todoId = 1;
export const create = (text) => ({
  type: CREATE,
  todo: {
    id: todoId++, // 새 항목을 추가하고 nextId 값에 1을 더해줍니다.
    text,
    done: false,
  },
});

export const remove = (id) => ({
  type: REMOVE,
  id,
});

export const edit = (id, text) => ({
  type: EDIT,
  todo: {
    id,
    text,
  },
});

export const toggle = (id) => ({
  type: TOGGLE,
  id,
});

export const createAsync = (text) => {
  return function f(dispatch) {
    setTimeout(() => dispatch(create(text)), 3000);
  };
};

const initialTodos = [
  // {
  //   id: 1,
  //   text: "일기 쓰기",
  //   done: true,
  // },
  // {
  //   id: 2,
  //   text: "밥 먹기",
  //   done: false,
  // },
  // {
  //   id: 3,
  //   text: "씻기",
  //   done: false,
  // },
];

export default function todos(state = initialTodos, action) {
  switch (action.type) {
    case CREATE:
      return state.concat(action.todo);
    case TOGGLE:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case REMOVE:
      return state.filter((todo) => todo.id !== action.id);
    case EDIT:
      return state.map((todo) =>
        todo.id === action.todo.id ? action.todo : todo
      );
    default:
      return state;
  }
}
