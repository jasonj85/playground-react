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
        QuizService.getQuestions()
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
                <h5>Enter our quiz below for the chance to enter a PS5 prize draw!</h5>

                <img src={logo} className="logo" alt="logo" />
                {successful ? (
                    <div class="alert alert-warning mb-2 text-center">
                        <p>Thank you your details have been registered and you will be contacted if you win!</p>
                    </div>) :
                    (
                        <>
                            <div className="form-group">
                                <button style={{ backgroundColor: questions ? "#EDBC07" : "#157831" }} onClick={getNewQuestions}>{questions ? "Restart" : "Start"} Quiz</button>
                            </div>
                            <QuizForm questions={questions} updateScore={updateScore} score={score} />
                            <div className="jumbotron">

                                {score ? <Result score={score} passed={passed} /> : <div style={{ height: "100px" }}></div>}
                                {passed ? <UserInfo setSuccessful={setSuccessful} setNotification={setNotification} /> : null}
                            </div>
                        </>
                    )}
            </div>

        </>
    )
}

export default Quiz;