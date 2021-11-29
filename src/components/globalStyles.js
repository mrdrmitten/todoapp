import { createGlobalStyle } from "styled-components"; 

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: all 0.50s linear;    
    }

    .btn:focus, .btn:hover {
        
        
      }

    .submitBtn {
        background: ${({ theme }) => theme.subBtnColor};
        border-color: ${({ theme }) => theme.subBtnBorder};
        color: ${({ theme }) => theme.subBtnText};
        border-width: 2px;
    }

    .submitBtn:hover, .submitBtn:focus {
        background: ${({ theme }) => theme.subBtnBorder};
        color: ${({ theme }) => theme.subBtnColor};
        border-color: ${({ theme }) => theme.subBtnColor};
    }

    .todoItem {
        color: ${({ theme }) => theme.subBtnText};
        background: ${({ theme }) => theme.subBtnColor};
        margin: 0;
       
    }

    .todoCheck {
        margin-right: 3px;
    }

`