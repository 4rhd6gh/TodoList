import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const Globalstyle = createGlobalStyle`
${reset}
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    display: flex;
    /* align-items: center; */
    justify-content: center;
    background: rgb(233, 236, 239);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

`;

export default Globalstyle;
