import React from "react";
import styled from 'styled-components';
import { Header } from "./Header";
import { Week } from "./Week";
import { TimeTable } from "./TimeTable";

const StyledCalendar = styled.div`
    font-family: Sans-Serif;
    width: 740px;
    background: #FFFFFF;
    height:100px;
    margin-left: auto;
    margin-right: auto;
    font-weight: 500;

    @media (max-width: 740px) {
        width: 100%;
    }
`


export const Calendar = () => {
    return(
        <StyledCalendar> 
            <Header />
            <Week />
            <TimeTable />
        </StyledCalendar>
    )
}