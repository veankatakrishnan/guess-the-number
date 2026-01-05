import React from "react";

function Result(props){
    const {num, currentterm} = props
    let result;

    if (currentterm){
        if(currentterm > num){
            result = 'Higher'
        }
        else if(currentterm < num){
            result = 'Lower'
        }
        else if(Number(currentterm) === Number(num)){
            result = 'Hurray !! Correct !!'
        }
        else{
            result = 'Invalid input to the guessing number field !!'
        }
     }

    return <h3>You have guessed : {result} </h3>
}

export default Result