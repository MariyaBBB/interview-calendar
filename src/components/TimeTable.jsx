import React, { useContext, useEffect, useRef, useState } from "react";
import styled from 'styled-components';
import { Button } from "./Button";
import { AppContext } from "../data/interviews";
import moment from 'moment'; 

const StyledTimeTable = styled.div`
    width: 740px;
    height: auto;
    background: #FFFFFF;
    color: #C0C0C0;
    overflow: hidden;
    position: relative;
    text-overflow: ellipsis;
    font-size: 20px;
    z-index: 0;
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
const StyledTimaAndInterview = styled.div`
    display: grid;
    grid-template-columns: 70px auto;
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

const StyledButtons = styled.div`
    height: 86px;
    margin-top: -36px;
    padding-left: 46px;
    padding-right: 46px;
    position: absolute;
    width: 740px;
    z-index: 3;
    background: #F6F6F6;
    display: grid;
    grid-template-columns: auto 1fr;
    @media (max-width: 740px) {
        width: 100%;
    }
`

export const TimeTable = (props) => {
    const [active1, setActive1] = useState(null);
    const [active2, setActive2] = useState(null);
    const arrayOfInterviews = useContext(AppContext);


    const getElem = (i, j) => {
        setActive1(i);
        setActive2(j);
    } 

    const rootEl = useRef(null);
    
    useEffect(() => {
        const onClick = e => rootEl.current.contains(e.target) || 
        setActive1(null);
        setActive2(null);
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
      }, []);

    const isEvent = (i, j) => {
        if(arrayOfInterviews[j][i]) return true;
        else return false;
    }

    const deleteEvent = (i, j) => {
        if(arrayOfInterviews[j][i]) {
            arrayOfInterviews[j][i] = null;
        }
    }

    const createEvent = () => {
        
        let res = prompt('Enter event time: HH');
        if(moment(res, "HH", true).isValid() && res >= 8 && res <= 20) { 
            let i = moment(new Date()).weekday();
            let j = res - 8;
            arrayOfInterviews[i][j] = true;    
        } else {
            alert("Fail");
        }
    }

    return (
        <> 
            <StyledTimeTable arrayOfInterviews={arrayOfInterviews} ref={rootEl} {...props}>{props.time.time.map((t, i) => (
                <StyledTimaAndInterview key={t}>
                <StyledTime >{t}</StyledTime>
                <StyledInterview>{arrayOfInterviews.map((el, j) => 
                        <StyledEvent key={[el, i, j]} onClick={() => getElem(i, j)} $isActive={active1===i && active2 ===j } $backgroundColor={isEvent(i, j)}>{}
                        </StyledEvent>)}
                </StyledInterview>
                </StyledTimaAndInterview>
                ))}
            </StyledTimeTable>
            <StyledButtons>
                <Button onClick={() => createEvent()} $medium $isVisible={true}>Today</Button> 
                <Button onClick={() => deleteEvent(active1, active2)} $medium $isVisible={active1 && isEvent(active1, active2)}>Delete</Button>
            </StyledButtons>
        </>
    )
}