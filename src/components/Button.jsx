import React from "react";
import styled from 'styled-components';

const StyledButton = styled.button`
 color: red;
 bold: none;
 border: none;
 font-size: ${props => props.$medium ? '32px' : '50px'};
 background: none;
 font-weight: 300;
 cursor: pointer;
 justify-self: end;
`
export const Button = (props) => {
    console.log(props)
    return(
        <StyledButton {...props}> 
        
        </StyledButton>
    )
}