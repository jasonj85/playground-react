import React, { useState } from 'react';
import axios from '../../axios';
import '../../Styles.scss';

const QuizForm = (props) => {
    const [formData, setFormData] = useState({});

    const updateInput = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.currentTarget.value,
        })
    }
    
    const handleCheckAnswers = e => {
        e.preventDefault();

        let score = 0;
        // compare user answers to correct answers and calculate score
        console.log(props.questions) 
        if (formData.q1 === props.questions[0].correct_answer) score +=20;
        if (formData.q2 === props.questions[1].correct_answer) score +=20;
        if (formData.q3 === props.questions[2].correct_answer) score +=20;
        if (formData.q4 === props.questions[3].correct_answer) score +=20;
        if (formData.q5 === props.questions[4].correct_answer) score +=20;

        props.updateScore(score);
           
    }
    return (
        props.questions ?
            (
                <form onSubmit={handleCheckAnswers}>

                    {props.questions.map((question, index) => {
                        return (
                            <div>
                                <p>Question #{index + 1} {(question.question)}</p>

                                <div class="form-group">
                                    <select className="form-control" name={"q" + (index + 1).toString()} 
                                    onChange={updateInput}>
                                        <option>Select answer here</option>
                                        {question.incorrect_answers.concat(question.correct_answer).map((a, i) => {
                                            return (<option value={a} key={i}>{a}</option>)
                                        })}
                                    </select>
                                </div>
                            </div>
                        )
                    })}
                    <button type="submit">Check your score</button>

                </form>

            ) :
            null
    )
}

export default QuizForm;