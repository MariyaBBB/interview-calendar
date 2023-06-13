
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

export const arrayOfInterviews = array;




