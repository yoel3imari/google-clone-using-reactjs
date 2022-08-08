import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `

*, *::after, *::before {
    margin: 0;
    padding: 0;
}

html {
    height: 100vh;
    min-width: 400px;
}

body {
    font-family: arial,sans-serif;
    font-size: 1rem;
    height: 100%;
    min-width: 400px;
}

#root, .App {
    height: 100%;
}

a {
    color: inherit;
    text-decoration: none;
}

ul {
    list-style: none;
}

`;

export default GlobalStyle;