// Получаем элементы DOM
const stickyCardAbout = document.querySelector('.O_StickyCardAbout');
const paragraphs = stickyCardAbout.querySelectorAll('.A_Paragraph');

// Определяем тексты для разных моментов прокрутки
const textByPosition = {
  800: [
    'Текст для первого момента прокрутки 1',
    'Текст для первого момента прокрутки 2',
    'Текст для первого момента прокрутки 3',
  ],
  1600: [
    'Текст для второго момента прокрутки 1',
    'Текст для второго момента прокрутки 2',
    'Текст для второго момента прокрутки 3',
  ],
  2400: [
    'Текст для третьего момента прокрутки 1',
    'Текст для третьего момента прокрутки 2',
    'Текст для третьего момента прокрутки 3',
  ],
};

// Обработчик события прокрутки страницы
window.addEventListener('scroll', function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Проверяем текущую позицию прокрутки и обновляем тексты внутри A_Paragraph
  paragraphs.forEach((paragraph, index) => {
    let newText = '';
    const positions = Object.keys(textByPosition).map(Number);
    const closestPosition = positions.reduce((prev, curr) =>
      Math.abs(curr - scrollTop) < Math.abs(prev - scrollTop) ? curr : prev
    );
    if (scrollTop >= closestPosition) {
      const texts = textByPosition[closestPosition];
      newText = texts[index % texts.length];
    }
    paragraph.innerHTML = newText;
  });
});
