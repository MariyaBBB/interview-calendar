import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { TimeTable } from "./TimeTable";
import moment from 'moment'; 

const StyledWeek = styled.div`
    height: 142px;
    background: #F6F6F6;
    border-top: 2px outset #ECECEC;
    border-bottom: 2px inset #ECECEC;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    padding-top: 16px;
    padding-left: 60px;
    font-size: 22px; 
    text-align: center;    
    
    @media (max-width: 700px) {
    padding-left: 45px; 
}

.dates {
    font-size: 28px;
    font-weight:300;
}

.week {
    font-size: 16px;
    font-weight:600;
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
    grid-template-columns: 0.15fr 0.7fr 0.15fr ;
    text-align: center;
    place-items: center;

`



const defaultProps = {
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    weekNames: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    dates: [],
    time: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00']
}

export const Week = () => {
    const [startDay, setStartDay] = useState(moment().startOf("month").startOf('week'))
    const [dates, setDates] = useState([]);
    const array =[];
    const day = startDay.clone();
    
    useEffect(() => {

        while(array.length < 7) {
            array.push(day.clone().date());
            day.add(1, 'day');
        }
        setDates(array);
    },[startDay]);

    const nextWeek = () => {
        const array =[];
        setStartDay(startDay.add(1, 'week')); 
        const day = startDay.clone();
        while(array.length < 7) {
            array.push(day.clone().date());
            day.add(1, 'day');
        }
        setDates(array);
    }

    const prevWeek = () => {
        const array =[];
        setStartDay(startDay.add(-1, 'week')); 
        const day = startDay.clone();
        while(array.length < 7) {
            array.push(day.clone().date());
            day.add(1, 'day');
        }
        setDates(array);
    }

    
    
    return (
        <>
        <StyledWeek> 
            {defaultProps.weekNames.map(name => <span className="week" key={name.id} >{name}</span>)} 
            {dates.map(date  => <span className="dates" key={date.id}>{date}</span>)} 
            <StyledWrapper>
                <StyledButton onClick={prevWeek}>{'<'}</StyledButton>
                <div>
                    <span>{defaultProps.monthNames[startDay.month()] + " "}</span>
                    <span>{startDay.year()}</span>
                </div>
                <StyledButton onClick={nextWeek}>{'>'}</StyledButton>
            </StyledWrapper>
        </StyledWeek>
        <TimeTable time={defaultProps} />
        </>
    )
}