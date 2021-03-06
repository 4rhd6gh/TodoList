import { createGlobalStyle } from "styled-components";
import TodoTemplate from "../components/TodoTemplate";
import TodoHead from "../components/TodoHead";
import TodoCreate from "../components/TodoCreate";
import TodoList from "../components/TodoList";
import { TodoProvider } from "../TodoContext";

const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
`;

const Sunah = () => {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
};

export default Sunah;
