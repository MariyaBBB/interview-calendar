import React from "react";
import styled from 'styled-components';

const StyledButton = styled.button`
 color: red;
 font-size: 50px;
 border: none;
 background: #FFFFFF;
 font-family: Arial;
 cursor: pointer;
 justify-self: end;
`
export const Button = (props) => {
    return(
        <StyledButton {...props}> 
        
        </StyledButton>
    )
}