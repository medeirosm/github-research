import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }
  
  html, body {
    width: 100%;
    height: 100%;
    font-size: 1rem;
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    cursor: default;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  // HTML5 display-role reset for older browsers
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  ol, ul {
    list-style: none;
  }

  button {
    font-family: inherit;
    font-size: 100%;
  }
`;
