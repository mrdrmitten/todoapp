import React, { useState } from "react";
import { func, string } from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faLightbulb } from "@fortawesome/free-solid-svg-icons";
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


const Toggle = ({ theme, toggleTheme}) => {
    const [isClicked, setIsClicked] = useState(false);
    
    function editFa() {
        return setIsClicked(prev => !prev)
    }

    function clickFunc() {
        toggleTheme();
        editFa();
    }

    return (
        <div className="mt-2">
            <Button onClick={clickFunc}>
                <FontAwesomeIcon id={1} icon={isClicked ? faLightbulb : faMoon} />
            </Button>
        </div>
    )
}

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired
}

export default Toggle;