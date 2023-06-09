import React from "react";
import styled from 'styled-components';
import { Button } from "./Button";
import moment from "moment";

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

const createInterview = () => {
    
    let res = prompt('Enter event time: YYYY-MM-DD HH:mm:ss');
    console.log(res);
    if(moment(res, "YYYY-MM-DD HH:mm:ss", true).isValid()) {
        console.log(moment(res).hour());
        console.log(moment(res).date());
        console.log(moment(res).month());
    } else {
        alert("Fail");
    }
    
}
export const Header = (props) => {
    return(
        <StyledHeader {...props}> 
            <StyledTitle>Interview calendar</StyledTitle>
            <Button onClick={createInterview} >+</Button>
        </StyledHeader>
    )
}