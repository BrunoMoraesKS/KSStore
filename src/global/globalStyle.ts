import { createGlobalStyle } from "styled-components";

export const Colors = {
  background: "#fffffe",
  headline: "#272343",
  paragraph: "#2d334a",
  button: "#ffd803",
  buttonText: "#272343",
  stroke: "#272343",
  main: "#fffffe",
  highlight: "#ffd803",
  secondary: "#e3f6f5",
  tertiary: "#bae8e8",
};

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


  body {


    font-family: 'Open Sans', sans-serif;

    background-color: ${Colors.background};

    color: ${Colors.paragraph}
  }


  h1, h2, h3, h4, h5, h6 {
    font-family: 'Mohave', sans-serif; 
    color: ${Colors.headline};
  }
  
  h1 {
    font-weight: 800;
  }

  h2 {
    font-weight: 600;
  }

  h3 {
    font-weight: 500;
  }

  h4, h5, h6 {
    font-weight: 400;
  }

  a, a:hover, a:focus, a:active, a:visited {
    text-decoration: none;
    text-decoration: underline;
    color: ${Colors.highlight};
  }
`;
