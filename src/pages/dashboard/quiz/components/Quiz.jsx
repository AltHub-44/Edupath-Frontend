import { useState } from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

const Quiz = ({ title, description, questions, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(-1));
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleSelectAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const checkAnswer = () => {
    if (selectedAnswer === null) return;

    setIsAnswerChecked(true);
    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
    if (isCorrect) setScore(score + 1);

    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = selectedAnswer;
    setUserAnswers(newUserAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsAnswerChecked(false);
    } else {
      setQuizCompleted(true);
      if (onComplete) onComplete(score);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsAnswerChecked(false);
    setScore(0);
    setUserAnswers(Array(questions.length).fill(-1));
    setQuizCompleted(false);
  };

  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

  if (quizCompleted) {
    const finalScore = (score / questions.length) * 100;
    return (
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold">Quiz Results</h2>
        <p className="text-gray-600">You've completed the quiz!</p>

        <div className="my-4 flex flex-col items-center">
          <Icon icon="mdi:medal" className="text-yellow-500 text-6xl" />
          <p className="text-3xl font-bold mt-2">{Math.round(finalScore)}%</p>
        </div>

        <p className="text-lg font-medium">Your score: {score} / {questions.length}</p>
        <p className="text-gray-500 mt-2">
          {finalScore >= 70 ? "Great job! You've mastered this topic." : "Keep practicing to improve!"}
        </p>

        <button onClick={restartQuiz} className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg">
          <Icon icon="mdi:restart" className="inline-block mr-2" />
          Retry Quiz
        </button>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-2 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div>
          <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
          <p className="text-gray-500 text-sm mt-1 mb-3">{description}</p>
        </div>
        <p className="text-sm font-medium">Question {currentQuestion + 1}/{questions.length}</p>
      </div>

      <div className="h-2 bg-gray-200 rounded-full mb-4">
        <div className="h-full bg-blue-500 rounded-full" style={{ width: `${progressPercentage}%` }} />
      </div>

      <h3 className="text-lg font-medium mb-4 mt-10">{currentQ.question}</h3>

      <div className="space-y-3">
        {currentQ.options.map((option, index) => (
          <label
            key={index}
            className={`w-full flex items-center p-3 border border-gray100 rounded-lg text-sm cursor-pointer ${
              isAnswerChecked && selectedAnswer === index
                ? index === currentQ.correctAnswer
                  ? "bg-green-100 border-green-400"
                  : "bg-red-100 border-red-400"
                : "hover:bg-gray20"
            }`}
          >
            <input
              type="radio"
              name="quiz-option"
              value={index}
              checked={selectedAnswer === index}
              onChange={() => handleSelectAnswer(index)}
              className="mr-2"
              disabled={isAnswerChecked}
            />
            {option}

            {isAnswerChecked && selectedAnswer === index && (
              index === currentQ.correctAnswer ? (
                <Icon icon="mdi:check-circle" className="text-green-500 text-lg ml-auto" />
              ) : (
                <Icon icon="mdi:close-circle" className="text-red-500 text-lg ml-auto" />
              )
            )}
            {isAnswerChecked && selectedAnswer !== index && index === currentQ.correctAnswer && (
              <Icon icon="mdi:check-circle" className="text-green-500 text-lg ml-auto" />
            )}
          </label>
        ))}
      </div>

      <div className="mt-6 flex justify-between">
        {!isAnswerChecked ? (
          <button 
            onClick={checkAnswer} 
            disabled={selectedAnswer === null}
            className={`px-4 py-2 rounded-lg w-full text-white ${
              selectedAnswer !== null ? "bg-blue-500" : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Check Answer
          </button>
        ) : (
          <button 
            onClick={nextQuestion} 
            className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
          >
            {currentQuestion < questions.length - 1 ? (
              <>
                Next Question
                <Icon icon="mdi:arrow-right" className="inline-block ml-2" />
              </>
            ) : (
              "Complete Quiz"
            )}
          </button>
        )}
      </div>
    </div>
  );
};

Quiz.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      question: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(PropTypes.string).isRequired,
      correctAnswer: PropTypes.number.isRequired,
    })
  ).isRequired,
  onComplete: PropTypes.func,
};

export default Quiz;