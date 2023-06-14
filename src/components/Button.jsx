import React from "react";
import styled from 'styled-components';

const StyledButton = styled.button`
 color: red;
 bold: none;
 border: none;
 font-size: ${props => props.$medium ? '32px' : '50px'};
 visibility: ${props => props.$isVisible ? 'visible': 'hidden'};
 background: none;
 font-weight: 300;
 cursor: pointer;
 justify-self: end;
`
export const Button = (props) => {
    return(
        <StyledButton {...props}> 
        
        </StyledButton>
    )
}