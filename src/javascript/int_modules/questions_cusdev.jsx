import React, { useState } from 'react';

const QuizCusDevComponent = () => {
  const [questions, setQuestions] = useState([
    {
      question: 'Что такое «Customer Development»?',
      options: [
        'Методика разработки продукта, основанная на активном участии клиентов в процессе',
        'Процесс разработки клиентов для продукта',
        'Маркетинговая стратегия, направленная на привлечение новых клиентов',
      ],
      correctOption: 0,
    },
    {
      question: 'Какова основная цель «Customer Development»?',
      options: [
        'Создание продукта, который полностью удовлетворяет требованиям клиентов',
        'Увеличение прибыли компании',
        'Повышение узнаваемости бренда',
      ],
      correctOption: 0,
    },
    {
      question: 'Какие шаги включает процесс «Customer Development»?',
      options: [
        'Проведение фокус-групп, разработка бизнес-плана, привлечение инвесторов',
        'Изучение конкурентов, разработка маркетинговой стратегии, запуск продукта',
        'Постановка гипотезы, проверка гипотезы, адаптация продукта, повторение',
      ],
      correctOption: 2,
    },
    {
      question: 'Какая роль у клиентов в процессе «Customer Development»?',
      options: [
        'Они предоставляют финансирование для разработки продукта',
        'Они только потребители продукта и не вовлечены в процесс разработки',
        'Они являются активными участниками, помогая в определении требований к продукту',
      ],
      correctOption: 2,
    },
    {
      question: 'Какие преимущества имеет подход «Customer Development»?',
      options: [
        'Увеличение срока разработки продукта ',
        'Снижение риска провала продукта на рынке',
        'Увеличение затрат на маркетинг и рекламу',
      ],
      correctOption: 1,
    },
  ]);

  const [selectedOptions, setSelectedOptions] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
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
    setCurrentQuestionIndex((prevCurrentQuestionIndex) => prevCurrentQuestionIndex + 1);
  };

  const handleStartSurvey = () => {
    setCurrentQuestionIndex(0);
  };

  const getProgressPercentage = () => {
    return  Math.floor((currentQuestionIndex) / questions.length * 100);
  };

  const correctAnswersPercentage = ((questions.length - incorrectAnswers.length) / questions.length) * 100;

  let resultMessage = '';
    if (correctAnswersPercentage === 100) {
        resultMessage = 'Поздравляем! Вы отлично знаете методику «Customer Development»! Ваши знания об этом подходе на высоком уровне. Продолжайте в том же духе и не останавливайтесь на достигнутом!';
      } else if (correctAnswersPercentage >= 70) {
        resultMessage = 'Хороший результат! Ваши знания о «Customer Development» достаточно хорошие. Однако всегда есть место для улучшения. Рекомендуем изучить эту методику более подробно, чтобы стать настоящим экспертом.';
      } else if (correctAnswersPercentage >= 40) {
        resultMessage = 'Вы еще мало знаете о «Customer Development». Рекомендуем почитать подробнее о его основах и принципах. Внимательное изучение материалов поможет вам повысить свои знания и навыки в этой области.';
      } else {
        resultMessage = 'Упс! Ваши знания о «Customer Development» требуют значительного улучшения. Не отчаивайтесь! Существует множество ресурсов, где вы можете узнать больше о «Customer Development». Рекомендуем начать с основ и постепенно расширять свои знания.';
    }


  return (
    <div className='O_QuestionBlock'>
      {currentQuestionIndex === -1 ? (
        <div className='M_StartCard'>
          <div>
            <div className='A_ProgressBar'>
              <progress value={getProgressPercentage()} max={100} />
            </div>
            <h3>5 вопросов</h3>
            <h2 className='A_HeaderTwo'>Тест на знание «Customer Development»</h2>
          </div>
          <div>
            <div className='A_ExpText'>
              <p className='A_Paragraph'>
              Пройдите этот тест, чтобы оценить вашу подготовку в области «Customer Development». «Customer Development» является важным подходом в разработке и управлении продуктами, и умение применять его концепции может быть полезным для специалистов в этой области.
              </p>
              <p className='A_Paragraph'>
              Тест состоит из 5 вопросов, в каждом из которых вам предлагается выбрать правильный ответ из трех вариантов. Ваша задача — выбрать наиболее подходящий ответ, основываясь на ваших знаниях о «Customer Development». По завершении теста вы получите результаты, которые помогут вам оценить ваш уровень подготовки в этой области.
              </p>
            </div>
            <button onClick={handleStartSurvey}>Приступить к тесту и проверить знания</button>
          </div>
        </div>
      ) : (
        <div>
          {!showResults && (
              <div  className='M_QuestionCard'>
              <div className='A_ProgressBar'>
                <progress value={getProgressPercentage()} max={100} />
                <h3>Вопрос {currentQuestionIndex + 1}</h3>
                <h2 className='A_HeaderTwo'>{questions[currentQuestionIndex].question}</h2>
              </div>
              <div>
              {questions[currentQuestionIndex].options.map((option, index) => (
                <div key={index}>
                  <button onClick={() => handleOptionSelect(currentQuestionIndex, { value: index })}>
                    {option}
                  </button>
                </div>
              ))}
              </div>
              
            </div>
          )}

          {showResults && (
            <div  className='M_StartCard'>
              <div>
                <progress value={100} max={100} />
                <h3>Результат</h3>
                <h2 className='A_HeaderTwo'>
                  Вы ответили правильно на {questions.length - incorrectAnswers.length} из {questions.length}
                </h2>
              </div>

              <div className='A_ResultsBackgound'>
                <div className='A_ExpText'>
                  <p className='A_Paragraph'>{resultMessage}</p>
                  {/* {incorrectAnswers.length > 0 && (
                    <div>
                      <h3 className='A_Paragraph'>Неправильные ответы:</h3>
                      <ul>
                        {incorrectAnswers.map((index) => (
                          <li className='A_Paragraph' key={index}>{questions[index].question}</li>
                        ))}
                      </ul>
                    </div>
                  )} */}
                </div> 
              </div>

            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizCusDevComponent;
