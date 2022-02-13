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
        background-color: ${({ theme }) => theme.colors.background};
        font-size: 1rem;
        font-family: 'Montserrat', sans-serif;
    }

    button {
        font-size: 16px;
        border: none;
        background-color: transparent;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: filter 200ms ease-in-out;
        padding: 10px;
        font-weight: 600;
    }

    button:hover {
        filter: brightness(120%);
    }

    span {
        display: inline-block;
    }

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyles;
