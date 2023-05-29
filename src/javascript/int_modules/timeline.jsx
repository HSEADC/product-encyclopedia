import React, { useState } from 'react';

const Timeline = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  const handleDateClick = (date, year) => {
    setSelectedDate(date);
    setSelectedYear(year);
  };

  const handleClose = () => {
    setSelectedDate(null);
    setSelectedYear(null);
  };

  const calculateOffset = (index) => {
    return index * 20; // Здесь можно настроить размер смещения
  };

  return (
    <div className="timeline">
      <div className="axis-y">
        <div className="tick">100</div>
        <div className="tick">200</div>
        <div className="tick">300</div>
        {/* Добавьте остальные деления оси у */}
      </div>
      <ul className="dates">
        <li
          className={selectedYear === 1679 ? 'active' : ''}
          onClick={() => handleDateClick('Готфрид Вильгельм Лейбниц разработал первую в мире двоичную систему счисления', 1679)}
          style={{ marginLeft: calculateOffset(0) }}
        >
          1679
        </li>
        <li
          className={selectedYear === 1755 ? 'active' : ''}
          onClick={() => handleDateClick('Сэмюэл Джонсон написал книгу, объясняющую двоичную систему в более широкой перспективе', 1755)}
          style={{ marginLeft: calculateOffset(1) }}
        >
          1755
        </li>
        <li
          className={selectedYear === 1847 ? 'active' : ''}
          onClick={() => handleDateClick('Джордж Буль ввел булеву алгебру. Теория булевой алгебры сыграла огромную роль в открытии математической логики, используемой сегодня при оцифровке.', 1847)}
          style={{ marginLeft: calculateOffset(2) }}
        >
          1847
        </li>
        <li
          className={selectedYear === 1938 ? 'active' : ''}
          onClick={() => handleDateClick('Алек Ривз продолжил свои исследования бинарного языка и способов его оцифровки. Алек открыл технологию PCM (импульсно-кодовая модуляция), которая обеспечивает эффективные и успешные голосовые вызовы в телекоммуникационной отрасли', 1938)}
          style={{ marginLeft: calculateOffset(3) }}
        >
          1938
        </li>
        <li
          className={selectedYear === 1940 ? 'active' : ''}
          onClick={() => handleDateClick('Джон В. Атанасофф подготовил статью «Вычислительная машина для решения больших систем линейных алгебраических уравнений», в которой представил и подробно описал цифровую вычислительную машину', 1940)}
          style={{ marginLeft: calculateOffset(4) }}
        >
          1940
        </li>
        <li
          className={selectedYear === 1943 ? 'active' : ''}
          onClick={() => handleDateClick('Была открыта первая в мире технология цифровой передачи голоса, известная как SIGSALY. Эта технология использовалась, особенно войсками, для тайной и эффективной связи с другими союзниками во время Второй мировой войны', 1943)}
          style={{ marginLeft: calculateOffset(5) }}
        >
          1943
        </li>
        <li
          className={selectedYear === 1945 ? 'active' : ''}
          onClick={() => handleDateClick('Первый отчет о EDVAC был выпущен его разработчикам 25 июня 1945 года. EDVAC — один из самых ранних цифровых компьютеров, который проложил путь к изобретению других цифровых компьютеров', 1945)}
          style={{ marginLeft: calculateOffset(6) }}
        >
          1945
        </li>
        <li
          className={selectedYear === 1954 ? 'active' : ''}
          onClick={() => handleDateClick('General Electric официально выпустила первый компьютер UNIVAC 1. Компьютер UNIVAC был первой в истории системой, которая внедрила систему расчета заработной платы в свои операции в Соединенных Штатах', 1954)}
          style={{ marginLeft: calculateOffset(7) }}
        >
          1954
        </li>
        <li
          className={selectedYear === 1955 ? 'active' : ''}
          onClick={() => handleDateClick('Компания по взаимному страхованию жизни Джона Хэнкока добилась огромного успеха, оцифровав более шестисот мегабайт информации от двух миллионов пользователей, имевших страховые полисы', 1955)}
          style={{ marginLeft: calculateOffset(8) }}
        >
          1955
        </li>
        <li
          className={selectedYear === 1956 ? 'active' : ''}
          onClick={() => handleDateClick('IBM объявила о выпуске первого в истории дискового накопителя. Эти устройства хранения данных позволяли пользователям свободно получать доступ к хранящимся на диске данным', 1956)}
          style={{ marginLeft: calculateOffset(9) }}
        >
          1956
        </li>
        <li
          className={selectedYear === 1960 ? 'active' : ''}
          onClick={() => handleDateClick('American Airlines в 1960 году запустила свою систему бронирования авиабилетов Sabre, которая обрабатывала 84 000 телефонных звонков в день и хранила 807 мегабайт информации о бронировании, расписании рейсов и инвентаре мест', 1960)}
          style={{ marginLeft: calculateOffset(10) }}
        >
          1960
        </li>
        <li
          className={selectedYear === 1968 ? 'active' : ''}
          onClick={() => handleDateClick('Библиотеки США начали использовать записи машиночитаемой каталогизации (MARC)', 1968)}
          style={{ marginLeft: calculateOffset(11) }}
        >
          1968
        </li>
        <li
          className={selectedYear === 1969 ? 'active' : ''}
          onClick={() => handleDateClick('CCD (ПЗС-матрица) было официально запущено Уиллардом Бойлом и Джорджем Смитом. Они вели исследования в области видеотелефонии и так называемой «полупроводниковой пузырьковой памяти»', 1969)}
          style={{ marginLeft: calculateOffset(12) }}
        >
          1969
        </li>
        <li
          className={selectedYear === 1970 ? 'active' : ''}
          onClick={() => handleDateClick('Pulsar — первые в мире часы с цифровым дисплеем и первая цифровая камера', 1970)}
          style={{ marginLeft: calculateOffset(13) }}
        >
          1970
        </li>
        <li
          className={selectedYear === 1971 ? 'active' : ''}
          onClick={() => handleDateClick('Запущен проект «Гутенберг» с целью сделать произведения, не защищенные авторским правом, электронно доступными для всех', 1971)}
          style={{ marginLeft: calculateOffset(14) }}
        >
          1971
        </li>
        <li
          className={selectedYear === 1979 ? 'active' : ''}
          onClick={() => handleDateClick('FedEx запустила свою онлайн-систему управления клиентами, операциями и услугами «COSMOS»', 1979)}
          style={{ marginLeft: calculateOffset(15) }}
        >
          1979
        </li>
        <li
          className={selectedYear === 1982 ? 'active' : ''}
          onClick={() => handleDateClick('Выпущен первый в истории компакт-диск', 1982)}
          style={{ marginLeft: calculateOffset(16) }}
        >
          1982
        </li>
        <li
          className={selectedYear === 1984 ? 'active' : ''}
          onClick={() => handleDateClick('Впервые Бюро переписи населения США опросило респондентов об использовании ими компьютера дома. В то время 8% всех домохозяйств США владели персональным компьютером', 1984)}
          style={{ marginLeft: calculateOffset(17) }}
        >
          1984
        </li>
        <li
          className={selectedYear === 1991 ? 'active' : ''}
          onClick={() => handleDateClick('В Финляндии была запущена первая сотовая сеть 2G', 1991)}
          style={{ marginLeft: calculateOffset(18) }}
        >
          1991
        </li>
        <li
          className={selectedYear === 1994 ? 'active' : ''}
          onClick={() => handleDateClick('В ходе первой в истории e-commerce транзакции была онлайн заказана большая пицца с пепперони, грибами и дополнительным сыром в Pizza Hut', 1994)}
          style={{ marginLeft: calculateOffset(19) }}
        >
          1994
        </li>
        <li
          className={selectedYear === 2001 ? 'active' : ''}
          onClick={() => handleDateClick('Электронный код продукта (EPC) определен в Массачусетском технологическом институте как замена универсального кода продукта (UPC или «штрих-код»)', 2001)}
          style={{ marginLeft: calculateOffset(20) }}
        >
          2001
        </li>
        <li
          className={selectedYear === 2003 ? 'active' : ''}
          onClick={() => handleDateClick('Впервые электронные платежи превзошли наличные и чеки в качестве предпочтительного способа оплаты для потребителей США. Этому способствовала растущая популярность дебетовых карт в качестве способа оплаты', 2003)}
          style={{ marginLeft: calculateOffset(21) }}
        >
          2003
        </li>
        <li
          className={selectedYear === 2004 ? 'active' : ''}
          onClick={() => handleDateClick('В США впервые продано больше цифровых фотоаппаратов, чем традиционных пленочных. Google объявляет о сотрудничестве с библиотеками Гарварда, Стэнфорда, Мичиганского университета и Оксфордского университета, а также Нью-Йоркской публичной библиотекой по цифровому сканированию книг из их коллекций', 2004)}
          style={{ marginLeft: calculateOffset(22) }}
        >
          2004
        </li>
        <li
          className={selectedYear === 2007 ? 'active' : ''}
          onClick={() => handleDateClick('94% мировых хранилищ информации являются цифровыми, что полностью отличается от 1986 года, когда 99,2% всех хранилищ были аналоговыми. Эстония становится первой в мире страной, использующей интернет-голосование на парламентских выборах.', 2007)}
          style={{ marginLeft: calculateOffset(23) }}
        >
          2007
        </li>
        <li
          className={selectedYear === 2008 ? 'active' : ''}
          onClick={() => handleDateClick('iTunes продает больше музыки, чем Walmart. Сатоши Накамото публикует «Биткоин: одноранговая электронная кассовая система», описывающую первую децентрализованную цифровую валюту. В октябре 2015 года The Economist заявил, что блокчейн, технология, лежащая в основе биткоина, «может изменить то, как работает экономика».', 2008)}
          style={{ marginLeft: calculateOffset(24) }}
        >
          2008
        </li>
        <li
          className={selectedYear === 2010 ? 'active' : ''}
          onClick={() => handleDateClick('Онлайн-реклама (26 миллиардов долларов) в Соединенных Штатах впервые превзошла газетную рекламу (22,8 миллиарда долларов). Производство цифровых камер достигло пика — чуть более 120 миллионов штук, поскольку их заменяют смартфоны.', 2010)}
          style={{ marginLeft: calculateOffset(25) }}
        >
          2010
        </li>
        <li
          className={selectedYear === 2011 ? 'active' : ''}
          onClick={() => handleDateClick('Посетители Amazon.com покупают больше книг для Kindle, чем печатных книг', 2011)}
          style={{ marginLeft: calculateOffset(26) }}
        >
          2011
        </li>
        <li
          className={selectedYear === 2012 ? 'active' : ''}
          onClick={() => handleDateClick('Впервые потребители в США платят за онлайн-фильмы больше, чем за DVD и Blu-ray диски. 180 петабайт (180 миллионов гигабайт) ежегодно добавляются в хранилище данных Facebook, которое за четыре года выросло в 2500 раз. Годовой объем продаж электронной коммерции впервые превысил 1 трлн долларов по всему миру.', 2012)}
          style={{ marginLeft: calculateOffset(27) }}
        >
          2012
        </li>
        <li
          className={selectedYear === 2014 ? 'active' : ''}
          onClick={() => handleDateClick('Число пользователей Интернета по всему миру достигает 3 миллиардов. Доходы от потоковой передачи от таких сервисов, как Spotify, впервые превысили продажи компакт-дисков', 2014)}
          style={{ marginLeft: calculateOffset(28) }}
        >
          2014
        </li>
        <li
          className={selectedYear === 2015 ? 'active' : ''}
          onClick={() => handleDateClick('Майкл Стоунбрейкер удостоен премии Тьюринга за фундаментальный вклад в концепции и практики, лежащие в основе современных систем баз данных', 2015)}
          style={{ marginLeft: calculateOffset(29) }}
        >
          2015
        </li>
      </ul>
      <div className="axis-x">
        <div className="tick"></div>
        
        {/* Добавьте остальные деления оси х */}
      </div>
      {selectedDate && (
        <div className="details">
          <p>Что случилось? {selectedDate}</p>
        </div>
      )}
    </div>
  );
};

export default Timeline;
