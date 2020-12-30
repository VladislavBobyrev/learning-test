//Счетчик

//выводит на экран цифру которую можно увеличиваль или уменьшать с помощью кнопок плюс и минус

let a = 0; // Обявляем переменную, присваиваем значение.
 
// Создаем стрелочную функцию которая не принимает параметры  и выполняет код уменьает а на 1, затем выводит полученное значение в counter на экран *[1]
 let funcMin = () => {  
      --a  
      document.querySelector('.counter').innerHTML = a
    }   
// Создаем стрелочную функцию которая не принимает параметры  и выполняет код увелчивает а на 1, затем выводит полученное значение в counter на экран *[2]
 let funcPlus = () => {
      ++a          
      document.querySelector('.counter').innerHTML = a
    } 



document.querySelector('.minus').addEventListener('click', funcMin) // Находим документ  с классом '.minus' через querySelector и добавляем слушатель событий addEventListenner
// и указывает первый параметр строку'click' она означает что при клике сработает affEventListenner, вторым параметром указываем действие после срабатывания клика, 
// вызываем функцию,*[1] следушая сстрока однотипна
document.querySelector('.plus').addEventListener('click', funcPlus)  // *[2]
document.querySelector('.counter') //находим документ counter


//Это первый код

//  let btnMinus = document.querySelector('.minus' )
//  let btnPlus = document.querySelector('.plus')
//  let counter = document.querySelector('.counter')
//  let a = 0;
 
 

//  if (btnMinus) {
//  let funcMin = (a) => {     
//        counter.innerHTML = --a;
//     }  
//  }

//  if(btnPlus) {
//  let funcPlus = (a) => {      
//       counter.innerHTML = ++a;
//     } 
// }

// counter.innerHTML = a







