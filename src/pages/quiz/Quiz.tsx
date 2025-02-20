import { useEffect, useState } from 'react'
import { quizData } from '../../quizData/quizdata';

import "../../styles/quiz.css"

import { useNavigate } from "react-router-dom"

interface UserAnswer {
    questionId: number;
    answer: string | number;
    isCorrect: boolean;
}

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30);
    const [quizFinished, setQuizFinished] = useState(false);
    const [userAnswer, setUserAnswer] = useState<string | number>("");

    const navigate = useNavigate();

    useEffect(() => {
        if (timeLeft === 0) {
            handleNextQuestion();
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    const handleNextQuestion = () => {
        if (currentQuestion < quizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);

            const isCorrect = userAnswer === quizData[currentQuestion].correctAnswer;

            setUserAnswers([
                ...userAnswers,
                { questionId: quizData[currentQuestion].id, answer: userAnswer, isCorrect },
            ]);
            if (isCorrect) setScore(score + 1);
            setTimeLeft(30);
            setUserAnswer("");
        } else {
            setQuizFinished(true);
        }
    };

    const handleSubmit = () => {
        let openRequest = indexedDB.open("quizAppDb", 1);

        openRequest.onsuccess = () => {
            let db = openRequest?.result;
            let transaction = db.transaction("attempts", "readwrite");
            let storeObject = transaction.objectStore("attempts");

            let request = storeObject.add({
                id: new Date().getTime(),
                attemptNumber: Math.random(),
                correctAnswers: score
            });

            navigate("/");
        }
    }

    if (quizFinished) {
        return (
            <div className="quiz-page " style={{
                flexDirection: 'column'
            }}>
                <h1>Quiz Finished!</h1>
                <p className="score">Your Score: {score} / {quizData.length}</p>
                <div className="results">
                    <h2>Review Your Answers:</h2>
                    <ul>
                        {userAnswers.map((ans, index) => (
                            <li
                                key={index}
                                className={ans.isCorrect ? "correct" : "incorrect"}
                            >
                                Question {index + 1}: {ans.answer} -{" "}
                                {ans.isCorrect ? "Correct" : "Incorrect"}
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={() => handleSubmit()}
                    >
                        Submit
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="quiz-page">
            <div>
                <h1>Quiz</h1>
                <p className="timer">Time Left: {timeLeft} seconds</p>
                <p style={{
                    marginBottom: "12px"
                }}>{quizData[currentQuestion].question}</p>
                {quizData[currentQuestion].type === "multiple-choice" ? (
                    <div className="options">
                        {quizData[currentQuestion].options?.map((option, index) => (
                            <button
                                key={index}
                                // onClick={() => handleAnswer(option)}
                                onClick={() => setUserAnswer(option)}
                                style={{
                                    background: userAnswer === option ? "#14b268" : ""
                                }}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                ) : (
                    <input
                        type="number"
                        // onChange={(e) => handleAnswer(Number(e.target.value))}
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(Number(e.target.value))}
                    />
                )}
                <button className="next-button" onClick={handleNextQuestion}>
                    Next
                </button>
                <p className="score">Score: {score}</p>
            </div>
        </div>
    );
}

export default Quiz
