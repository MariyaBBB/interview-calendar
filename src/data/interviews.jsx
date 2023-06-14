import { createContext } from "react";

export const createNewArray = () => {
    const arrayOfInterview = [];
    for(let i = 0; i < 13; i++) 
        for(let j=0; j<7; j++) {
            arrayOfInterview[i][j] = '';
        }
    return arrayOfInterview;
}
const array = new Array(7);
for(let i = 0; i < 7; i++) {
    array[i] = new Array(13);
}
array[0][5] = true;
array[1][8] = true;
array[2][5] = true;
export const arrayOfInterviews = array;

export const AppContext = createContext('no context');




