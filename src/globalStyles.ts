import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html {
        font-size: 100%;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: #dfdbe6;
        font-size: 1rem;
        font-family: 'Montserrat', sans-serif;
    }

    h1 {
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyles;
