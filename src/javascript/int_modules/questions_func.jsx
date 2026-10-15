import React, { useState } from 'react';

const QuizFuncComponent = () => {
  const [questions, setQuestions] = useState([
    {
      question: 'Что представляют собой функциональные требования в разработке цифровых продуктов?',
      options: [
        'Описание визуального дизайна продукта',
        'Определение основных функций и возможностей продукта',
        'План маркетинговых активностей для продукта',
      ],
      correctOption: 1,
    },
    {
      question: 'Что включает процесс определения функциональных требований?',
      options: [
        'Анализ потребностей пользователей',
        'Определение внешнего вида продукта',
        'Определение бюджета проекта',
      ],
      correctOption: 0,
    },
    {
      question: 'Какие основные элементы содержатся в функциональных требованиях?',
      options: [
        'Описание визуального дизайна продукта',
        'Определение основных функций и возможностей продукта',
        'План маркетинговых активностей для продукта',
      ],
      correctOption: 1,
    },
    {
      question: 'Что представляет собой диаграмма прецедентов?',
      options: [
        'Визуализацию последовательности действий пользователя',
        'Визуализацию взаимодействия компонентов системы',
        'Визуализацию взаимодействия с внешними системами',
      ],
      correctOption: 0,
    },
    {
      question: 'Что означает требование «сквозной функциональности»?',
      options: [
        'Функция должна быть доступна во всех частях продукта',
        'Функция должна быть доступна только определенным пользователям',
        'Функция должна быть доступна только в определенное время',
      ],
      correctOption: 0,
    },
    {
      question: 'Что такое требование «отказоустойчивости»?',
      options: [
        'Функция должна быть доступна во всех частях продукта',
        'Способность продукта работать без подключения к интернету',
        'Способность продукта обеспечивать безопасность данных',
      ],
      correctOption: 2,
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
    if (correctAnswersPercentage === 100) {
      resultMessage = 'Поздравляем! Вы отлично знаете "Функциональные требования"! Ваши знания об этом аспекте разработки продуктов на высоком уровне. Продолжайте в том же духе и не останавливайтесь на достигнутом!';
      } else if (correctAnswersPercentage >= 70) {
      resultMessage = 'Хороший результат! Ваши знания о "Функциональных требованиях" достаточно хорошие. Однако всегда есть место для улучшения. Рекомендуем изучить этот аспект более подробно, чтобы стать настоящим экспертом.';
      } else if (correctAnswersPercentage >= 40) {
      resultMessage = 'Вы еще мало знаете о "Функциональных требованиях". Рекомендуем почитать подробнее о их основах и принципах. Внимательное изучение материалов поможет вам повысить свои знания и навыки в этой области.';
      } else {
      resultMessage = 'Упс! Ваши знания о "Функциональных требованиях" требуют значительного улучшения. Не отчаивайтесь! Существует множество ресурсов, где вы можете узнать больше о "Функциональных требованиях". Рекомендуем начать с основ и постепенно расширять свои знания.';
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
            <h2 className='A_HeaderTwo'>Тест на знание фунцикиональных требований</h2>
          </div>
          <div>
            <div className='A_ExpText'>
              <p className='A_Paragraph'>
              Пройдите этот тест, чтобы оценить вашу подготовку в области «Функциональных требований». Функциональные требования являются важным аспектом разработки и проектирования продуктов, и понимание их концепций и применение может быть полезным для специалистов в этой области.
              </p>
              <p className='A_Paragraph'>
              Тест состоит из 6 вопросов, в каждом из которых вам предлагается выбрать правильный ответ из трех вариантов. Ваша задача — выбрать наиболее подходящий ответ, основываясь на ваших знаниях о «Функциональных требованиях». По завершении теста вы получите результаты, которые помогут вам оценить ваш уровень подготовки в этой области.
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

export default QuizFuncComponent;
