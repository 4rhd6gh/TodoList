import { createGlobalStyle } from "styled-components";

import TodosContainer from "../containers/TodosContainer";
const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
`;

const Sunah = () => {
  return (
    <div>
      <GlobalStyle />
      <TodosContainer />
    </div>
  );
};

export default Sunah;
