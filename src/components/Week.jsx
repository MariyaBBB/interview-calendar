import React from "react";
import styled from 'styled-components';

const StyledWeek = styled.div`
    height: 142px;
    background: #F6F6F6;
    border-top: 2px outset #ECECEC;
    border-bottom: 2px inset #ECECEC;
    display: grid;
    grid-template-columns: repeat(7, auto);
    padding-top: 16px;
    padding-left: 95px;
    font-size: 22px;
    align-self: center;
    
@media (max-width: 700px) {
    padding-left: 45px; 
}

.week {
    font-size: 16px;
    font-weight:300;
}
`

const StyledButton = styled.button`
color: red;
bold: none;
border: none;
font-size: 30px;
background:none;
cursor: pointer;
`

const StyledWrapper = styled.div`
    align-content: center;
    text-content:center;
    grid-column: 1/8; 
    display: grid;
    grid-template-columns: 0.04fr 0.71fr 0.25fr ;
    text-align: center;

`



const defaultProps = {
    years: [2022, 2023],
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    weekNames: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    dates: [1, 2, 3, 4, 5, 6, 7]
}

export const Week = () => {
    return (
        <StyledWeek> 
            {defaultProps.weekNames.map(name => <span key={name.id} >{name}</span>)} 
            {defaultProps.dates.map(date => <span key={date.id}>{date}</span>)} 
            <StyledWrapper>
                <StyledButton>{'<'}</StyledButton>
                <div>
                    <span>{defaultProps.monthNames[5] + " "}</span>
                    <span>{defaultProps.years[1]}</span>
                </div>
                <StyledButton>{'>'}</StyledButton>
            </StyledWrapper>
        </StyledWeek>
    )
}