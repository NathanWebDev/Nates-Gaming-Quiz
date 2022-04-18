import React from "react";
import { useState } from "react";
import { QuestionData } from "../QuestionData";
import '../App.css';

export default function QuestionHud() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answer, setAnswer] = useState(null);
    const [score, setScore] = useState(0);
    
    const restartHandler = () => {
        setCurrentQuestion(0);
        setAnswer(null);
        setScore(0);
    }

    const submitHandler = () => {
        if (answer === QuestionData[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }
        if (currentQuestion < QuestionData.length) {
            setCurrentQuestion(currentQuestion + 1);
        }
    }
    
    if (currentQuestion < QuestionData.length) {
    return (
        <div class="question">
            <div class="score">
                <h1>Question {currentQuestion + 1}/{QuestionData.length}</h1>
            </div>
            <div class="question-box">
                <div class="question-info">
                    <img src={QuestionData[currentQuestion].backgroundIMG} alt={QuestionData[currentQuestion].backgroundIMG}/>
                <div class="question-text">
                    <h2>{QuestionData[currentQuestion].question}</h2>
                        <div class="answer-options">
                            <div class="option-1" tabIndex="1" onClick={() => setAnswer(QuestionData[currentQuestion].answers[0])}><strong>{QuestionData[currentQuestion].answers[0]}</strong></div>
                            <div class="option-2" tabIndex="2" onClick={() => setAnswer(QuestionData[currentQuestion].answers[1])}><strong>{QuestionData[currentQuestion].answers[1]}</strong></div>
                            <div class="option-3" tabIndex="3" onClick={() => setAnswer(QuestionData[currentQuestion].answers[2])}><strong>{QuestionData[currentQuestion].answers[2]}</strong></div>
                            <div class="option-4" tabIndex="4" onClick={() => setAnswer(QuestionData[currentQuestion].answers[3])}><strong>{QuestionData[currentQuestion].answers[3]}</strong></div>
                        </div>
                <div class="button" onClick={submitHandler}>
                    <h3>Submit</h3>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
    } else {
        return (
        <div class="final-score">
            <h1>You got {score} out of {QuestionData.length} questions right</h1>
            <div class="button" onClick={restartHandler}>
                <h3>Restart</h3>
            </div>
        </div>
        )
    }
}