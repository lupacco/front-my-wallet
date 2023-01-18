import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
        //font-family: 'Saira Stencil One', cursive;
        font-weight: 400;
        margin: 0;
        padding: 0;
    }
    body{
        margin: 0;
        padding: 0;
        background-color: #8C11BE;
        color: #FFFFFF;
    }
`

export default GlobalStyle