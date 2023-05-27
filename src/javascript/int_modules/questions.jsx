import React, { useState } from 'react';

function SurveyComponent() {
  const [questions, setQuestions] = useState([
    {
      question: 'Вопрос 1',
      explanation: 'Это объяснение для вопроса 1',
      options: [
        { value: 1, explanation: 'Это объяснение для варианта ответа 1' },
        { value: 2, explanation: 'Это объяснение для варианта ответа 2' },
        { value: 33323, explanation: 'Это объяснение для варианта ответа 33323' }
      ]
    },
    {
      question: 'Вопрос 2',
      explanation: 'Это объяснение для вопроса 2',
      options: [
        { value: 4, explanation: 'Это объяснение для варианта ответа 4' },
        { value: 287203, explanation: 'Это объяснение для варианта ответа 287203' },
        { value: 6, explanation: 'Это объяснение для варианта ответа 6' }
      ]
    },
    // Добавьте другие вопросы и варианты ответов с объяснениями по своему усмотрению
  ]);

  const [selectedOptions, setSelectedOptions] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [showResults, setShowResults] = useState(false);

  const handleOptionSelect = (questionIndex, option) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [questionIndex]: option.value,
    }));

    if (questionIndex === questions.length - 1) {
      setShowResults(true);
    } else {
      handleNextQuestion();
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);
  };

  const calculateResult = () => {
    let total = 0;

    Object.values(selectedOptions).forEach((option) => {
      total += option;
    });

    return total;
  };

  const handleStartSurvey = () => {
    setCurrentQuestionIndex(0);
  };

  const getProgressPercentage = () => {
    return Math.floor((currentQuestionIndex / questions.length) * 100);
  };

  return (
    <div>
      {currentQuestionIndex === -1 ? (
        <div>
          <h3>Информация о тесте</h3>
          <p>Здесь может быть описание и информация о тесте.</p>
          <button onClick={handleStartSurvey}>Перейти к вопросам</button>
        </div>
      ) : (
        <div>
          {currentQuestionIndex < questions.length && !showResults ? (
            <div>
              <h3>{questions[currentQuestionIndex].question}</h3>
              <p>{questions[currentQuestionIndex].explanation}</p>
              {questions[currentQuestionIndex].options.map((option) => (
                <div key={option.value}>
                  <button onClick={() => handleOptionSelect(currentQuestionIndex, option)}>
                    {option.value}
                  </button>
                  <p>{option.explanation}</p>
                </div>
              ))}
              <div>
                <progress value={getProgressPercentage()} max={100} />
              </div>
            </div>
          ) : (
            <div>
              <h3>Результат</h3>
              <p>Сумма выбранных ответов: {calculateResult()}</p>
              {/* Добавьте другие элементы или логику для комментариев к результату */}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SurveyComponent;
