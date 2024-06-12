import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;

      body {
        background: #000;
      }

      body, select, input, button {
        font-family: 'DM Sans', sans-serif;
      }
    }
  `;

export default GlobalStyles;
