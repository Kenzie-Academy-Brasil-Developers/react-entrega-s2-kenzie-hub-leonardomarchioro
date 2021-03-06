import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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
    .Toastify__toast-theme--light {
    background-color: var(--grey-2);
  }
  * {
  scrollbar-width: thin;
  scrollbar-color: var(--grey-1) var(--grey-4);
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
    background-color: var(--grey-4);
}

*::-webkit-scrollbar-thumb {
    background-color: var(--grey-4);
    border-radius: 20px;
    border: 2px solid var(--grey-1);
}
`;

export const colorPrimary = "#FF577F";
export const primary50 = "#FF427F";
export const primaryDisable = "#59323F";
export const grey0 = "#F8F9FA";
export const grey1 = "#868E96";
export const grey2 = "#343B41";
export const grey3 = "#212529";
export const grey4 = "#121214";
export const sucess = "#3FE864";
export const negative = "#E83F5B";
