import React, { useState } from 'react';

function SurveyComponent() {
  const [questions] = useState([
    {
      question: '1/8',
      explanation: 'Какой тип продукта вы хотите создать?',
      about: 'Понимание типа продукта, который вы хотите создать, поможет определить общий контекст вашего проекта и его возможности. Это также может иметь влияние на выбор технологий, инструментов и ресурсов, необходимых для разработки вашего продукта.',
      options: [
        { value: 30000, explanation: 'Веб-приложение' },
        { value: 60000, explanation: 'Мобильное приложение' },
        { value: 80000, explanation: 'Другой тип продукта' }
      ]
    },
    {
      question: '2/8',
      explanation: 'Какой функционал должен быть включен в ваш продукт?',
      about: 'Функционал продукта определяет, какие задачи и цели он будет выполнять, какие операции пользователи смогут выполнять с его помощью и какие возможности и сервисы будут предоставлены. ',
      options: [
        { value: 20000, explanation: 'Авторизация и учетные записи пользователей, разделение на роли и права доступа' },
        { value: 30000, explanation: 'Система оплаты и интеграция с платежными шлюзами, интеграция с социальными сетями' },
        { value: 10000, explanation: 'Аналитика и отчетность' }
      ]
    },
    {
      question: '3/8',
      explanation: 'Нужно ли вам разработать дизайн интерфейса продукта?',
      about: 'Поддержка и сопровождение после запуска могут включать исправление ошибок, обновление функциональности, обеспечение безопасности и т. д.',
      options: [
        { value: 15000, explanation: 'Да, требуется разработка дизайна' },
        { value: 10000, explanation: 'У меня есть макет, который нужно доработать' },
        { value: 0, explanation: 'Нет, у меня уже есть готовый дизайн' }
      ]
    },
    {
      question: '4/8',
      explanation: 'Какой объем контента или данных должен обрабатывать продукт?',
      about: 'Объем контента или данных может иметь различные аспекты, в зависимости от конкретного продукта. Например, если вы разрабатываете веб-приложение, объем данных может относиться к количеству пользовательских профилей, хранимых файлов, текстовых данных, изображений и т. д.',
      options: [
        { value: 10000, explanation: 'Маленький' },
        { value: 25000, explanation: 'Средний' },
        { value: 60000, explanation: 'Большой' }
      ]
    },
    {
      question: '5/8',
      explanation: 'Какие сроки разработки вы рассматриваете?',
      about: 'Конкретные сроки разработки могут варьироваться в зависимости от масштаба и сложности проекта, доступных ресурсов, бюджета и других факторов.',
      options: [
        { value: 30000, explanation: 'Очень сжатые' },
        { value: 0, explanation: 'Умеренные' },
        { value: -10000, explanation: 'Расширенные' }
      ]
    },
    {
      question: '6/8',
      explanation: 'Какую степень масштабируемости требует ваш продукт?',
      about: 'Ответ на этот вопрос позволит команде разработки понять, какие технологии, инфраструктура и архитектурные решения следует применить для обеспечения необходимого уровня масштабируемости вашего продукта. Это также поможет определить возможные затраты на масштабирование в будущем и планирование технических решений с учетом ожидаемых потребностей.',
      options: [
        { value: 10000, explanation: 'Минимальная' },
        { value: 25000, explanation: 'Средняя' },
        { value: 60000, explanation: 'Высокая' }
      ]
    },
    {
      question: '7/8',
      explanation: 'Требуется ли вам поддержка и сопровождение продукта после его запуска?',
      about: 'Ответ на этот вопрос поможет определить необходимость и объем дополнительных услуг после запуска продукта. Он также может повлиять на бюджетирование и планирование ресурсов для поддержки и сопровождения продукта в долгосрочной перспективе.',
      options: [
        { value: 0, explanation: 'Нет, поддержка и сопровождение не требуются' },
        { value: 5000, explanation: 'Да, требуется ограниченная поддержка и сопровождение' },
        { value: 20000, explanation: 'Да, требуется полная поддержка и сопровождение' }
      ]
    },
    {
      question: '8/8',
      explanation: 'Нужна ли вам интеграция с внешними системами или сервисами?',
      about: 'Интеграция с внешними системами может требовать дополнительной работы и ресурсов.',
      options: [
        { value: 0, explanation: 'Нет, интеграция не требуется' },
        { value: 5000, explanation: 'Да, требуется интеграция (средняя сложность)' },
        { value: 20000, explanation: 'Да, требуется интеграция (высокая сложность)' }
      ],
    }
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
    <div className='O_QuestionBlock'>
      {currentQuestionIndex === -1 ? (
        <div className='M_StartCard'>
          <div>
          <div className='A_ProgressBar'>
                <progress value={getProgressPercentage()} max={100} />
              </div>
          <h3>8 вопросов</h3>
          <h2 className='A_HeaderTwo'>Рассчитайте стоимость <br /> своей идеи</h2>
          </div>
          <div>
            <div className='A_ExpText'>
              <p className='A_Paragraph'>Цифровые продукты требуют значительных вложений в&nbsp;разработку, дизайн, функциональность, интеграции и&nbsp;другие аспекты. Понимание примерных затрат поможет вам планировать бюджет и&nbsp;принимать обоснованные решения на&nbsp;каждом этапе разработки.</p>
              <p className='A_Paragraph'>В&nbsp;этом тесте вам будет задано несколько вопросов, связанных с&nbsp;различными аспектами вашего будущего цифрового продукта. Пожалуйста, выбирайте ответы, наиболее точно отражающие ваши потребности и&nbsp;требования. После ответа на&nbsp;все вопросы, мы&nbsp;предоставим вам примерную сумму затрат, которую можно ожидать при создании продукта с&nbsp;учетом выбранных параметров.</p>
            </div>
          <button onClick={handleStartSurvey}>Перейти к вопросам</button>
          </div>
        </div>
      ) : (
        <div>
          {currentQuestionIndex < questions.length && !showResults ? (
            <div className='M_QuestionCard'>

              <div>
                <div className='A_ProgressBar'>
                  <progress value={getProgressPercentage()} max={100} />
                </div>
                <h3>{questions[currentQuestionIndex].question}</h3>
                <div>
                  <p>{questions[currentQuestionIndex].explanation}</p>
                  <p className='A_Paragraph'>{questions[currentQuestionIndex].about}</p>
                </div>
              </div>

              <div>
              {questions[currentQuestionIndex].options.map((option) => (
                <div key={option.value}>
                  <button onClick={() => handleOptionSelect(currentQuestionIndex, option)}>       
                    <p>{option.explanation}</p>
                  </button>
                </div>
              ))}
              </div>

            </div>
          ) : (
            <div className='M_StartCard'>

              <div>
                <div className='A_ProgressBar'>
                    <progress value={100} max={100} />
                </div>
                <h3>Результат</h3>
                <h2 className='A_HeaderTwo'>${calculateResult()}</h2>
              </div>
              <div className='A_ResultsBackgound'>
                <div className='A_ExpText'>
                  <p className='A_Paragraph'>На&nbsp;основе ваших ответов мы&nbsp;подготовили примерную сумму затрат, которую можно ожидать при разработке вашего цифрового продукта.</p>        
                  <br /> <p className='A_Paragraph'>Обратите внимание, что представленная сумма является приблизительной и&nbsp;может варьироваться в&nbsp;зависимости от&nbsp;различных факторов. Конечные затраты могут быть скорректированы и&nbsp;уточнены после детального анализа и&nbsp;обсуждения вашего проекта с&nbsp;опытными разработчиками.</p>        
                  <br /> <p className='A_Paragraph'>Независимо от&nbsp;конкретной суммы затрат, помните, что создание цифрового продукта требует инвестиций времени, ресурсов и&nbsp;усилий. Будьте готовы к&nbsp;этому и&nbsp;планируйте свой бюджет соответствующим образом.</p>        
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SurveyComponent;
