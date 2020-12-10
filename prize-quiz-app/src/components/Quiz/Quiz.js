import React, { useState } from 'react';
import axios from '../../axios';

import QuizForm from './QuizForm';
import Result from './Result';
import UserInfo from './UserInfo';

import logo from '../../images/win-a-playstation-5.jpg';
import '../../Styles.scss';

import QuizService from '../../services/quiz.service';

const Quiz = () => {
    const [successful, setSuccessful] = useState(false);
    const [notification, setNotification] = useState("");
    const [questions, setQuestions] = useState();
    const [passed, setPassed] = useState(false);
    const [score, setScore] = useState();

    const getNewQuestions = () => {
        // const newQuestions = QuizService.getQuestions();
        axios.get('https://opentdb.com/api.php?amount=5')
            .then(response => {
                setQuestions(response.data.results);
                console.log(response);
            }).catch(err => console.log("unable to get questions"))

        setScore();
        setPassed(false);
    };

    const updateScore = result => {
        setScore(result);

        if (result >= 80) setPassed(true);

        console.log(result);
    };

    return (
        <>
            <div className="entry-form">
                <img src={logo} className="logo" alt="logo" />
                {successful ? (
                    <div class="alert alert-success">
                        <p>Thank you your details have been registered and you will be contacted if you win!</p>
                    </div>) :
                    (
                        <>
                            <div className="form-group">
                                <button className="btn btn-dark btn-block" onClick={getNewQuestions}>{questions ? "Restart" : "Start" } Quiz</button>
                            </div>
                            <QuizForm questions={questions} updateScore={updateScore} score={score} />
                            {score ? <Result score={score} passed={passed} /> : <div style={{height: "100px"}}></div>}
                            {passed ? <UserInfo setSuccessful={setSuccessful} setNotification={setNotification}  /> : null}
                        </>
                    )}
            </div>

        </>
    )
}

export default Quiz;