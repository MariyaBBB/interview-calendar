import React from "react";
import styled from 'styled-components';
import { Button } from "./Button";

const StyledHeader = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr;
    gap: 45px;
    align-content: center;
    height: 126px;
    background: #FFFFFF;
    padding-left: 45px;
    padding-right: 50px;
    font-weight: 100;
`

const StyledTitle = styled.h1`
    font-weight: 100;
    font-size: 36px;
`


export const Header = (props) => {
    return(
        <StyledHeader {...props}> 
            <StyledTitle>Interview calendar</StyledTitle>
            <Button >+</Button>
        </StyledHeader>
    )
}