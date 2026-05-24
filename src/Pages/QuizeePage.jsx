import { useState } from "react"
import sample1 from "../Data/sample1"

export default function QuizePage() {

    const [currentQuestion, setCurrentQuestion] = useState(0)

    const [selectedAnswer, setSelectedAnswer] = useState(null)

    const quiz = sample1[0]

    const questionData = quiz.questions[currentQuestion]

    const nextQuestion = () => {

        if (currentQuestion < quiz.questions.length - 1) {

            setCurrentQuestion(currentQuestion + 1)

            setSelectedAnswer(null)

        }

    }

    return (

        <div className="quiz-container">

            <h1>{quiz.quizeeTitle}</h1>

            <p>{quiz.quizeeAbout}</p>

            {/* QUESTION */}

            <div className="question-card">

                <h2>
                    Question {currentQuestion + 1}
                </h2>

                <h3>
                    {questionData.question}
                </h3>

                {/* CHOICES */}

                <div className="choice-container">

                    {
                        questionData.choices.map((item, index) => (

                            <button

                                key={index}

                                className={
                                    selectedAnswer === index
                                    ? "selected"
                                    : ""
                                }

                                onClick={()=>{
                                    setSelectedAnswer(index)
                                }}

                            >
                                {item}
                            </button>

                        ))
                    }

                </div>

                {/* NEXT BUTTON */}

                <button

                    className="next-btn"

                    disabled={selectedAnswer === null}

                    onClick={nextQuestion}

                >

                    Next Question →

                </button>

            </div>

        </div>

    )

}