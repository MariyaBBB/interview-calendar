import React, { useContext } from "react";
import styled from 'styled-components';
import { Button } from "./Button";
import moment from "moment";
import { AppContext, arrayOfInterviews} from "../data/interviews";

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
    const arrayOfInterviews = useContext(AppContext);
    const createInterview = () => {
    
        let res = prompt('Enter event time: YYYY-MM-DD HH:mm:ss');
        console.log(res);
        if(moment(res, "YYYY-MM-DD HH:mm:ss", true).isValid()) { 
            let i = moment(res).weekday();
            let j = moment(res).hour() - 8;
            arrayOfInterviews[i][j] = 'event';
            console.log(arrayOfInterviews);
    
        } else {
            alert("Fail");
        }
    }
    return(
        <StyledHeader {...props}> 
            <StyledTitle>Interview calendar</StyledTitle>
            <Button onClick={createInterview} $isVisible={true}>+</Button>
        </StyledHeader>
    )
}