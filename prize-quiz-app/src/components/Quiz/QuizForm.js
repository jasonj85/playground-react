import React, { useState, useEffect } from 'react';
import '../../Styles.scss';

const QuizForm = (props) => {
    const [formData, setFormData] = useState();
    const [questions, setQuestions] = useState();

    useEffect(() => {
        if (props.questions) {
            props.questions.forEach(question => {
                // add correct answer and then randomise the order of array
                let randomAnswers = question.incorrect_answers.concat(question.correct_answer).sort(() => Math.random() - 0.5);
                question.answers = randomAnswers;
            });

            setQuestions(props.questions);
        }
    }, [props.questions, questions]);

    const updateInput = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.currentTarget.value,
        });
    }

    const handleCheckAnswers = e => {
        e.preventDefault();

        let score = 0;
        // compare user answers to correct answers and calculate score
        // will refactor to dynamic check
        console.log(formData);

        if (formData.q1 === props.questions[0].correct_answer) score += 20;
        if (formData.q2 === props.questions[1].correct_answer) score += 20;
        if (formData.q3 === props.questions[2].correct_answer) score += 20;
        if (formData.q4 === props.questions[3].correct_answer) score += 20;
        if (formData.q5 === props.questions[4].correct_answer) score += 20;

        props.updateScore(score);
    }
    return (
        questions && !props.failed ?
            (
                <form onSubmit={handleCheckAnswers}>

                    {questions.map((question, index) => {
                        return (
                            <div>
                                <p><strong>Question {index + 1} - <span dangerouslySetInnerHTML={{__html: question.question}}></span></strong></p>
                                
                                <div className="form-group">
                                    <select className="form-control" name={"q" + (index + 1).toString()}
                                        onChange={updateInput}>
                                        <option>Select answer here</option>
                                        {question.answers.map((a, i) => {
                                            return (<option value={a} key={i} dangerouslySetInnerHTML={{__html: a}}></option>)
                                        })}
                                    </select>
                                </div>
                                <hr />
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