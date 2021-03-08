let num = '69';
let numPars = Number(num)
const table = document.querySelector('.table')
table.innerHTML = numPars;
console.log(parseInt(5.23456)) // Выведет 5 тк числа после тлчки отбрасываются
console.log(parseInt('5.фова56')) // Выведет 5 тк буквы отбырасываются за исключением 16. 32 разраядной ситстемы исчыисления
console.log(parseInt(АА.23456)) // Выведет nan тк первый символ должен быть число
console.log(parseInt(5.23456 + 5)) // выведет 10
console.log(parseInt('5.23456' + '5')) // выведет 10 парс илнт парсит к числу строку
console.log(parseInt('10011', 10)) // Первым аргументом передаем строку выорым систему исчислеиня
let popup = document.querySelector('.modal');
let openPopupButton = document.querySelector('.button-open');
let closePopupButton = popup.querySelector('.button-close');

openPopupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal--show');
});

closePopupButton.addEventListener('click', function () {
  popup.classList.remove('modal--show');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
   popup.classList.remove('modal--show')
  }
});
