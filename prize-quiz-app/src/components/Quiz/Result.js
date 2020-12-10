import React, { useState } from 'react';
import axios from '../../axios';

const Result = (props) => {
    return (
        <div>
            <h3>Your result was {props.score}%</h3>
            {props.passed ? 
            (<p>Congratulations you have successfully passed the quiz, please fill in your contact details below so that we can contact you if you win the prize draw.</p>) : 
            (<p>Unfortunately you have not got enough correct answers to enter the prize draw. Please hit the restart quiz button above to try again.</p>)}         
        </div>
    )
}

export default Result;