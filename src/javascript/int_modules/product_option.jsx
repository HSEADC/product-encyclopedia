import React, { useState } from 'react';

const ProductComponent = () => {
  const [employeeCount, setEmployeeCount] = useState(0);
  const [costCount, setCostCount] = useState(0);
  const [monthsCount, setMonthsCount] = useState(0);
  const [firstSelectionMade, setFirstSelectionMade] = useState(false);
  const [secondSelectionMade, setSecondSelectionMade] = useState(false);
  const [timeSelectionMade, setTimeSelectionMade] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Продукт это');
  const [selectedDescription, setSelectedDescription] = useState('Траляля');

  const handleFirstSelection = (option, description) => {
    if (firstSelectionMade) {
      return;
    }

    if (option === 'мобильное приложение') {
      setEmployeeCount(10);
      setCostCount(5000);
      setMonthsCount(3);
    } else if (option === 'веб-приложение') {
      setEmployeeCount(5);
      setCostCount(3000);
      setMonthsCount(2);
    } else if (option === 'другое') {
      setEmployeeCount(2);
      setCostCount(1000);
      setMonthsCount(1);
    }

    setSelectedOption(option);
    setSelectedDescription(description);
    setFirstSelectionMade(true);
    setSecondSelectionMade(false);
    setTimeSelectionMade(false);
  };

  const handleSecondSelection = (option, description) => {
    if (!firstSelectionMade || secondSelectionMade) {
      return;
    }

    if (option === 'простой') {
      setEmployeeCount(employeeCount + 5);
      setCostCount(costCount + 2000);
      setMonthsCount(monthsCount + 1);
    } else if (option === 'средний') {
      setEmployeeCount(employeeCount + 10);
      setCostCount(costCount + 4000);
      setMonthsCount(monthsCount + 2);
    } else if (option === 'сложный') {
      setEmployeeCount(employeeCount + 15);
      setCostCount(costCount + 6000);
      setMonthsCount(monthsCount + 3);
    }

    setSelectedOption(option);
    setSelectedDescription(description);
    setSecondSelectionMade(true);
    setTimeSelectionMade(false);
  };

  const handleTimeSelection = (option, description) => {
    if (!secondSelectionMade || timeSelectionMade) {
      return;
    }

    if (option === 'быстрые') {
      setMonthsCount(monthsCount - 1);
    } else if (option === 'обычные') {
      // No changes
    } else if (option === 'медленные') {
      setMonthsCount(monthsCount + 1);
    }

    setSelectedOption(option);
    setSelectedDescription(description);
    setTimeSelectionMade(true);
  };

  const handleRestart = () => {
    setEmployeeCount(0);
    setCostCount(0);
    setMonthsCount(0);
    setFirstSelectionMade(false);
    setSecondSelectionMade(false);
    setTimeSelectionMade(false);
    setSelectedOption('Продукт это');
    setSelectedDescription('Траляля');
  };

  return (
    <div className="product_chart">
      <div className="flowchart">
        <div>
          {/* Варианты выбора для первого вопроса */}

          <button
            onMouseEnter={() => setSelectedDescription('Мобильное приложение — описание')}
            onClick={() => handleFirstSelection('мобильное приложение', 'Мобильное приложение — описание')}
            disabled={firstSelectionMade}
          >
            Мобильное приложение
          </button>
          <button
            onMouseEnter={() => setSelectedDescription('Веб-приложение — описание')}
            onClick={() => handleFirstSelection('веб-приложение', 'Веб-приложение — описание')}
            disabled={firstSelectionMade}
          >
            Веб-приложение
          </button>
          <button
            onMouseEnter={() => setSelectedDescription('Другое — описание')}
            onClick={() => handleFirstSelection('другое', 'Другое — описание')}
            disabled={firstSelectionMade}
          >
            Другое
          </button>
        </div>
        <div>
          {/* Варианты выбора для второго вопроса */}
          <button
            onMouseEnter={() => setSelectedDescription('Простой — описание')}
            onClick={() => handleSecondSelection('простой', 'Простой — описание')}
            disabled={!firstSelectionMade || secondSelectionMade}
          >
            Простой
          </button>
          <button
            onMouseEnter={() => setSelectedDescription('Средний — описание')}
            onClick={() => handleSecondSelection('средний', 'Средний — описание')}
            disabled={!firstSelectionMade || secondSelectionMade}
          >
            Средний
          </button>
          <button
            onMouseEnter={() => setSelectedDescription('Сложный — описание')}
            onClick={() => handleSecondSelection('сложный', 'Сложный — описание')}
            disabled={!firstSelectionMade || secondSelectionMade}
          >
            Сложный
          </button>
        </div>
        <div>
          {/* Варианты выбора для третьего вопроса */}
          <button
            onMouseEnter={() => setSelectedDescription('Быстрые — описание')}
            onClick={() => handleTimeSelection('быстрые', 'Быстрые — описание')}
            disabled={!secondSelectionMade || timeSelectionMade}
          >
            Быстрые
          </button>
          <button
            onMouseEnter={() => setSelectedDescription('Обычные — описание')}
            onClick={() => handleTimeSelection('обычные', 'Обычные — описание')}
            disabled={!secondSelectionMade || timeSelectionMade}
          >
            Обычные
          </button>
          <button
            onMouseEnter={() => setSelectedDescription('Медленные — описание')}
            onClick={() => handleTimeSelection('медленные', 'Медленные — описание')}
            disabled={!secondSelectionMade || timeSelectionMade}
          >
            Медленные
          </button>
        </div>
      </div>

      <div className="details">
        <div>
          <div>
            <span>Количество сотрудников: {employeeCount}</span>
            <span>Количество затрат: {costCount}</span>
            <span>Количество месяцев работы: {monthsCount}</span>
          </div>

          <div>
            {/* Блок с описанием выбранного этапа */}
            {selectedOption && (
              <div>
                <h3>Выбранный этап: {selectedOption}</h3>

                  <p>Описание: {selectedDescription}</p>
              </div>
            )}
          </div>
        </div>       
        <div>
          <button onClick={handleRestart}>Перезапустить</button>
        </div>

      </div>
      
    </div>
    
  );
};

export default ProductComponent;
