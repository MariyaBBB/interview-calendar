import React, { useState } from "react";
import styled from 'styled-components';
import { arrayOfInterviewObject } from "../data/interviews";

const StyledTimeTable = styled.div`
    height: auto;
    background: #FFFFFF;
    display: grid;
    grid-template-columns: 70px 1fr;
    color: #C0C0C0;
    overflow: hidden;
    font-size: 20px;
`

const StyledInterview = styled.div`
    grid-column: 2; 
    display: grid;
    grid-template-columns: repeat(7, auto);
    text-align: center;
    place-items: center;
    border:none;
`

const StyledTime = styled.div`
    padding-top: 28px;
    padding-left: 14px;
`

const StyledObj = styled.div`
    :hover {background: #B3B7FF;};
    border-right: 2px solid #ECECEC;
    border-bottom: 2px solid #ECECEC;
    margin-top: -20px;
    border-left: none;
    border-top:none;
    width: 100%;
    height: 100%;   
    
    ${props => props.$backgroundColor ? {background: '#EBECFF'}: '' };
    
`

export const TimeTable = (props) => {
    const check = (obj, i, index) => {
        console.log(i, index)
    } 
    return (
        <> 
            <StyledTimeTable {...props}>{props.time.time.map((t, index) => (
                <>
                <StyledTime>{t}</StyledTime>
                <StyledInterview>{arrayOfInterviewObject[index].map((obj,i) => 
                        <StyledObj $backgroundColor={obj.isInterview ? true : false}>{}
                        </StyledObj>)}
                </StyledInterview>
                </>
                ))}
            </StyledTimeTable>
            
        </>
    )
}