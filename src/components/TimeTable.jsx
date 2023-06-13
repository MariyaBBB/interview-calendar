import React, { useState } from "react";
import styled from 'styled-components';
import { arrayOfInterviews } from "../data/interviews";

const StyledTimeTable = styled.div`
    height: auto;
    background: #FFFFFF;
    display: grid;
    grid-template-columns: 70px auto;
    color: #C0C0C0;
    overflow: hidden;
    font-size: 20px;
    @media (max-width: 740px) {
    padding-left: 0px; 
    width: 100%;
    grid-template-columns: auto 1fr;
}
`

const StyledInterview = styled.div`
    grid-column: 2; 
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
    place-items: center;
`

const StyledTime = styled.div`
    padding-top: 28px;
    padding-left: 14px;
    @media (max-width: 740px) {
        padding-left: 4px;
    }
`

const StyledEvent = styled.div`
    border: 2px solid #ECECEC;
    margin-top: -20px;
    border-left: none;
    border-top:none;
    width: 100%;
    height: 100%;   
    cursor: pointer;
    ${props => props.$backgroundColor ? {background: '#EBECFF'}: '' };
    ${props => props.$isActive ? {background: '#B3B7FF'}: '' };
`


export const TimeTable = (props) => {
    const [active1, setActive1] = useState(null);
    const [active2, setActive2] = useState(null);
    const getElem = (i, j) => {
        setActive1(i);
        setActive2(j);
        console.log(arrayOfInterviews[i][j])
    } 
    console.log(arrayOfInterviews);
    return (
        <> 
            <StyledTimeTable {...props}>{props.time.time.map((t, i) => (
                <>
                <StyledTime>{t}</StyledTime>
                <StyledInterview>{arrayOfInterviews.map((el,j) => 
                        <StyledEvent onClick={() => getElem(i, j)} $isActive={active1===i && active2 ===j } $backgroundColor={el[j] ? true : false}>{el[j]}
                        </StyledEvent>)}
                </StyledInterview>
                </>
                ))}
            </StyledTimeTable>
        </>
    )
}