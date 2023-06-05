import React from "react";
import styled from 'styled-components';
import { Header } from "./Header";
import { Button } from "./Button";

const StyledCalendar = styled.div`
    font-family: Sans-Serif;
    width: 740px;
    background: #FFFFFF;
    height:100px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 740px) {
        width: 100%;
    }

`

export const Calendar = () => {
    return(
        <StyledCalendar> 
            <Header />
        </StyledCalendar>
    )
}