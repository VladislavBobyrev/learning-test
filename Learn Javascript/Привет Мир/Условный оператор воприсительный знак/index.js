
// if else


let accessAllowed;
let age = prompt('Сколько вам лет?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}



// ?

let age = prompt('let sksko?');
let accessAllowed = (age > 18) ? true : false;  
console.log(accessAllowed)  


// несколько операторов ?

let age = prompt('let sksko?');
let message = (age < 3) ? 'hello litle' :
    (age < 18) ? 'hello bou' :
    (age < 100) ? 'hello old' :
    'super age';

    console.log(message)

    //Нетрадиционное использование „?“

    let company = prompt('Какая компания создала JavaScript?', '');
    
    (company == 'netscape') ?
        console.log('verno') : console.log('ne verno'); 

// Задание 1

        Выведется ли alert?

if ("0") {
  alert( 'Привет' );
}

выведится

// Задание 2

let company = prompt('Какое «официальное» название JavaScript','ECMAScript')
let message = (company == 'ECMAScript') ? console.log('verno') : console.log('ne verno its ECMAScript');


let num = prompt('number?');
let message = (num == 0) ? 'значение равно нулю.' : (num > 0)  ? ' значение больше нуля,' :
     'если значение меньше нуля,' ;

     console.log(message)


let message;
let login = prompt( 'how a you?')

if (login == 'Сотрудник') {
    console.log('Привет')
} else if (login == 'Директор') {
    console.log('Добрый день')
} else if (login == '') {
    console.log('Нет логина')
} else {
    console.log(message = '') ;
    
}