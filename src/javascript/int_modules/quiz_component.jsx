import React, { useState } from 'react';

const QuizComponent = () => {
  const [questions, setQuestions] = useState([
    {
      question: 'Вопрос 1',
      options: ['Вариант 1', 'Вариант 2', 'Вариант 3'],
      correctOption: 0,
    },
    {
      question: 'Вопрос 2',
      options: ['Вариант 1', 'Вариант 2', 'Вариант 3'],
      correctOption: 1,
    },
    {
      question: 'Вопрос 3',
      options: ['Вариант 1', 'Вариант 2', 'Вариант 3'],
      correctOption: 2,
    },
  ]);

  const [selectedOptions, setSelectedOptions] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);

  const handleOptionSelect = (questionIndex, option) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [questionIndex]: option.value,
    }));

    if (option.value !== questions[questionIndex].correctOption) {
      setIncorrectAnswers((prevIncorrectAnswers) => [...prevIncorrectAnswers, questionIndex]);
    }

    if (questionIndex === questions.length - 1) {
      setShowResults(true);
    } else {
      handleNextQuestion();
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestion((prevCurrentQuestion) => prevCurrentQuestion + 1);
  };

  const progressBarWidth = ((currentQuestion + 1) / questions.length) * 100;
  const correctAnswersPercentage = ((questions.length - incorrectAnswers.length) / questions.length) * 100;

  let resultMessage = '';
  if (correctAnswersPercentage === 100) {
    resultMessage = 'Поздравляем! Вы отлично знаете материалы!';
  } else if (correctAnswersPercentage >= 70) {
    resultMessage = 'Хороший результат! Продолжайте в том же духе!';
  } else if (correctAnswersPercentage >= 40) {
    resultMessage = 'Вы еще мало знаете, стоит почитать подробнее.';
  } else {
    resultMessage = 'Упс! Вам нужно больше практики и изучения.';
  }

  return (
    <div className='M_StartCard'>
      <div className='progress-bar' style={{ width: `${progressBarWidth}%` }}></div>

      {!showResults && (
        <div>
          <h3>Вопрос {currentQuestion + 1}</h3>
          <h2 className='A_HeaderTwo'>{questions[currentQuestion].question}</h2>
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(currentQuestion, { value: index })}
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {showResults && (
        <div>
          <h3>Результат</h3>
          <h2 className='A_HeaderTwo'>
            Правильных ответов: {questions.length - incorrectAnswers.length}/{questions.length}
          </h2>
          <p>{resultMessage}</p>
          {incorrectAnswers.length > 0 && (
            <div>
              <h3>Неправильные ответы:</h3>
              <ul>
                {incorrectAnswers.map((index) => (
                  <li key={index}>{questions[index].question}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
