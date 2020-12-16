import React, { useState } from 'react';

import QuizForm from './QuizForm';
import Result from './Result';
import UserInfo from './UserInfo';

import logo from '../../images/win-a-playstation-5.jpg';
import '../../Styles.scss';

import { GetQuestions } from '../../services/quiz.service';

const Quiz = () => {
    const [successful, setSuccessful] = useState(false);
    const [notification, setNotification] = useState("");
    const [questions, setQuestions] = useState();
    const [passed, setPassed] = useState(false);
    const [failed, setFailed] = useState(false);
    const [score, setScore] = useState();

    const getNewQuestions = () => {
        GetQuestions()
            .then(response => {
                setQuestions(response.data.results);
                console.log(response);
            }).catch(err => console.log("unable to get questions"))

        setScore();
        setPassed(false);
        setFailed(false);
    };

    const updateScore = result => {
        setScore(result);

        if (result >= 80) setPassed(true)
        else (setFailed(true))

        console.log(result);
    };

    return (
        <>
            <div className="entry-form">
                <h4>Enter our quiz below for the chance to enter a PS5 prize draw!</h4>

                {notification && (
                    <div class="alert alert-warning mb-2 text-center">
                        <p>{notification}</p>
                    </div>
                )}

                <img src={logo} className="logo" alt="logo" />
                {successful ? (
                    <div class="alert alert-warning mb-2 text-center">
                        <p>Thank you your details have been registered and you will be contacted if you win!</p>
                        <p>If you want to check the status of your application register with your email address.</p>
                    </div>) :
                    (
                        <>
                            <div className="form-group">
                                <button style={{ backgroundColor: questions ? "#EDBC07" : "#157831" }} onClick={getNewQuestions}>{questions ? "Restart" : "Start"} Quiz</button>
                            </div>
                            <QuizForm questions={questions} updateScore={updateScore} score={score} failed={failed} />
                            <div className="jumbotron">

                                {passed || failed ? <Result score={score} passed={passed} /> : <div style={{ height: "100px" }}></div>}
                                {passed ? <UserInfo setSuccessful={setSuccessful} setNotification={setNotification} /> : null}
                            </div>
                        </>
                    )}
            </div>

        </>
    )
}

export default Quiz;