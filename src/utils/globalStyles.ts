import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}

  body {
    font-family: Avenir;
  }

  * {
    box-sizing: border-box;
  }
`;
