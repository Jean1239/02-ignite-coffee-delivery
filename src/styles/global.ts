import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) =>
			props.theme.colors["brand-purple-light"]};
    }

    body {
        background-color: ${(props) => props.theme.colors["base-background"]};
        font-size: 1rem;
        font-family: Roboto, sans-serif;
        line-height: 1.3;
        font-weight: 400;
    } 
`;
