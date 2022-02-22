import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    :root{
        --background: #000000;
        --color-primary: #FF577F;
        --color-primary-50: #FF427F;
        --color-primary-Disable: #59323F;
        --grey-4:  #121214;
        --grey-3:  #212529;
        --grey-2: #343B41;
        --grey-1: #868E96;
        --grey-0: #F8F9FA;
        --sucess: #3FE864;
        --negative: #E83F5B;
    }
    body {
        background: var(--background);
        color: var(--grey-0);
    }
    body, input, button {
        font-family: 'Inter', sans-serif;
        font-weight: 500;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Inter', sans-serif;
        font-weight: bold;
    }
    button {
        cursor: pointer;
    }
    a{
        text-decoration: none;
    }
`;
