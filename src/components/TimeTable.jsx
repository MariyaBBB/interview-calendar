import React, { useState } from "react";
import styled from 'styled-components';
import { arrayOfInterviewObject } from "../data/interviews";

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
    border:none;
`

const StyledTime = styled.div`
    padding-top: 28px;
    padding-left: 14px;
    @media (max-width: 740px) {
        padding-left: 4px;
    
    }
`

const StyledObj = styled.div`
    border-right: 2px solid #ECECEC;
    border-bottom: 2px solid #ECECEC;
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
        console.log(arrayOfInterviewObject[i][j])
    } 
    return (
        <> 
            <StyledTimeTable {...props}>{props.time.time.map((t, i) => (
                <>
                <StyledTime>{t}</StyledTime>
                <StyledInterview>{arrayOfInterviewObject[i].map((obj,j) => 
                        <StyledObj onClick={() => getElem(i, j)} $isActive={active1===i && active2 ===j } $backgroundColor={obj.isInterview ? true : false}>{}
                        </StyledObj>)}
                </StyledInterview>
                </>
                ))}
            </StyledTimeTable>
            
        </>
    )
}