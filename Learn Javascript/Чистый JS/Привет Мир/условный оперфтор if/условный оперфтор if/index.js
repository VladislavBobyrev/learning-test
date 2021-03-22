//=========== Задача 1 ==============

if ('0') {
    console.log('этот текст вывелся тк значение 0 это строка а это значит что строка не пустая тоесть true')
}

//=========== Задача 2 ==============


let JSname = prompt('Официальное название js?', 'ECMAscript' );

if (JSname == 'ECMAscript') {
 
  
} else {
   console.log('Ne verno');    
}


 //=========== Задача 3 ==============
let a = prompt('num');
let b = 2;
let rezult = (a + b < 4) ? ('меньше 4') : ("Большеше 4");
console.log(rezult);



  //=========== Задача 4 ==============
    let login = prompt('Кто вы ?')

    let Message = (login == 'сотрудник') ? ('добро опжаловать') : 
    (login == 'директор') ? ('Здравствуйте') :
    (login == '') ? (' Нет логина') : 
    ('')

    console.log(Message)