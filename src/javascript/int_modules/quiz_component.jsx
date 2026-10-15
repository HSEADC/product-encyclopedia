import React, { useState } from 'react';

const QuizCusDevComponent = () => {
  const [questions, setQuestions] = useState([
    {
      question: 'Начнем с главного, что такое цифровой продукт?',
      options: [
        'Продукт, созданный с использованием технологий цифровой обработки данных',
        'Продукт, доступный только в электронном формате',
        'Продукт, предназначенный для использования на цифровых устройствах',
      ],
      correctOption: 0,
    },
    {
      question: 'Какие основные преимущества у цифровых продуктов?',
      options: [
        'Быстрая и удобная доставка',
        'Возможность персонализации',
        'Низкая стоимость производства',
      ],
      correctOption: 1,
    },
    {
      question: 'Что такое UX-дизайн в цифровых продуктах?',
      options: [
        'Дизайн пользовательского интерфейса',
        'Дизайн опыта пользователя',
        'Дизайн взаимодействия',
      ],
      correctOption: 1,
    },
    {
      question: 'Что означает термин «мобильный оптимизм»?',
      options: [
        'Оптимизация цифрового продукта для использования на мобильных устройствах',
        'Уверенность в развитии мобильных технологий',
        'Поддержка мобильных платформ разработкой цифрового продукта',
      ],
      correctOption: 0,
    },
    {
      question: 'Что такое MVP в контексте цифровых продуктов?',
      options: [
        'Минимально возможный продукт',
        'Наиболее ценный продукт',
        'Максимально выгодный продукт',
      ],
      correctOption: 0,
    },
    {
      question: 'Что такое A/B-тестирование в цифровых продуктах?',
      options: [
        'Тестирование продукта на разных аудиториях',
        'Тестирование двух разных версий продукта',
        'Тестирование продукта на разных платформах',
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
    if (correctAnswersPercentage === 100) {
      resultMessage = 'Поздравляем! Вы отлично знаете материалы! Ваши знания о цифровых продуктах на высоком уровне. Продолжайте в том же духе и не останавливайтесь на достигнутом!';
    } else if (correctAnswersPercentage >= 70) {
      resultMessage = 'Хороший результат! Ваши знания о цифровых продуктах достаточно хорошие. Однако всегда есть место для улучшения. Рекомендуем изучить тему более подробно, чтобы стать настоящим экспертом.';
    } else if (correctAnswersPercentage >= 40) {
      resultMessage = 'Вы еще мало знаете о цифровых продуктах. Рекомендуем почитать подробнее о различных аспектах и принципах их создания. Внимательное изучение материалов поможет вам повысить свои знания и навыки в этой области.';
    } else {
      resultMessage = 'Упс! Ваши знания о цифровых продуктах требуют значительного улучшения. Не отчаивайтесь! Существует множество ресурсов, где вы можете узнать больше о цифровых продуктах. Рекомендуем начать с основ и постепенно расширять свои знания.';
    }


  return (
    <div className='O_QuestionBlock'>
      {currentQuestionIndex === -1 ? (
        <div className='M_StartCard'>
          <div>
            <div className='A_ProgressBar'>
              <progress value={getProgressPercentage()} max={100} />
            </div>
            <h3>8 вопросов</h3>
            <h2 className='A_HeaderTwo'>   Тест на знание цифровых продуктов   </h2>
          </div>
          <div>
            <div className='A_ExpText'>
              <p className='A_Paragraph'>
              Этот тест предназначен для проверки ваших знаний о&nbsp;цифровых продуктах. Цифровые продукты стали неотъемлемой частью нашей жизни, и&nbsp;понимание их&nbsp;основных принципов и&nbsp;компонентов может быть полезно для всех, кто работает в&nbsp;области разработки, дизайна или управления цифровыми продуктами.
              </p>
              <p className='A_Paragraph'>
              Тест состоит из&nbsp;6&nbsp;вопросов, где вам предлагается выбрать правильный ответ из&nbsp;трех вариантов. Ваша задача&nbsp;&mdash; выбрать наиболее точный ответ, основываясь на&nbsp;своих знаниях и&nbsp;опыте. После ответа на&nbsp;все вопросы вы&nbsp;получите результаты, которые покажут ваш уровень знаний о&nbsp;цифровых продуктах.
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
