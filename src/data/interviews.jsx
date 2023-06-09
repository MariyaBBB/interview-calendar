
export const createNewArray = () => {
    const arrayOfInterviewObject = [];
    for(let i = 0; i < 12; i++) 
        for(let j=0; j<7; j++) {
            arrayOfInterviewObject[i][j] = Object.create(null, {
                isInterview: false
            })
        }
    return arrayOfInterviewObject
}

export const arrayOfInterviewObject = [
    [{isInterview: true}, {isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}],
    [{isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}],
    [{isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}],
    [{isInterview: false}, {isInterview: false}, {isInterview: true}, {isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}],
    [{isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}],
    [{isInterview: true}, {isInterview: false}, {isInterview: true}, {isInterview: false}, {isInterview: true}, {isInterview: false}, {isInterview: true}],
    [{isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}],
    [{isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}],
    [{isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}],
    [{isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}],
    [{isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}],
    [{isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}],
    [{isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}, {isInterview: false}],
]




