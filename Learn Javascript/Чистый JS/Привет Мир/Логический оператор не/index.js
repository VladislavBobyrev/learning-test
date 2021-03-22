 // оператор не !

 console.log(!true)
 console.log(!0)

 // двойное не используют в качестве приведения к логическому типу 
 console.log(!!"non-empty string")//первое НЕ преобразует значение в логическое значение и возвращает обратное/ console.log(!!undefined)

 //Задачи 1 
  console.log(null || 2 || undefined) //true
  //выело 2

 //Задачи 2
 console.log( console.log(1) || 2 || console.log(3)) // выведит 1
 //выыело 1 и 2


 //Задачи 3
 alert( 1 && null && 2 ); //null  при и выводится первое неправильное значения

 //Задачи 4
 // что выведит 
 alert( alert(1) && alert(2) );
 // и вд=озвращает первое ложное значение 

 //Задачи 5
 //Что выведет код ниже?

 alert( null || 2 && 3 || 4 );

 // интересное задание

// //Задачи 6
/ let age = prompt()
 if (age >= 14|| age <= 90) {
   console.log(' verno')
 } else {
   console.log('ne verno')
 }
// //Задачи 7

 let age = prompt()
 if ( !(age >= 14|| age <= 90)){
   console.log(' verno')
 } else {
   console.log('ne verno')
 }

 //Задачи 8
 // Какие из перечисленных ниже alert выполнятся?

 // Какие конкретно значения будут результатами выражений в условиях if(...)?

 if (-1 || 0) alert( 'first' );
 if (-1 && 0) alert( 'second' );
 if (null || -1 && 1) alert( 'third' );

 // 3 выполниться


//Задачи 9

let login = prompt('введите логин')
let  pass

if (login == 'админ') {
 if (pass = prompt('Введите пароль')) {
   if (pass == 'я главный ') {
     console.log('Здравствуйте')
   } else if (pass = ''){
console.log('Неверный пароль')
   } else {
     console.log('я вас не знаю')
   }
   }
 }



