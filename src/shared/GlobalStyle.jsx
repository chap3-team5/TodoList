import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
   
  }
`;

export default GlobalStyle;
