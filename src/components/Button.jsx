import React from "react";
import styled from 'styled-components';

const StyledButton = styled.button`
 color: red;
 font-size: 55px;
 bold: none;
 border: none;
 background: #FFFFFF;
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