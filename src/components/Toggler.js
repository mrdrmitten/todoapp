import React from "react";
import { func, string } from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
    background: ${({ theme }) => theme.background};
    border: 2px solid ${({ theme }) => theme.toggleBorder};
    color: ${({ theme }) => theme.text};
    border-radius: 30px;
    cursor: pointer;
    font-size: 0.8rem;
    padding: 0.6rem;
    }
`;

const Toggle = ({ theme, toggleTheme }) => {
    return (
        <div className="row row-cols-lg-auto justify-content-center mb-5">
            <Button onClick={toggleTheme} >
                Switch Theme
            </Button>
        </div>
    )
}

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired
}

export default Toggle;