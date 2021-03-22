//Логические операторы

// || или 
// && и
// ! не

console.log( true || false)
console.log( true ||true )
console.log( false || true)
console.log( false || false)

// все тру за исключением когда оба аргумента фалс

if (true || false) {
  console.log('hello')
}

 let closeMag = prompt() 
 if (closeMag < 10 || closeMag > 18) {
  console.log('close') 
}


let message = (closeMag < 10 || closeMag > 18)?  console.log('close') :
console.log('open');

// находит первое истенное значение

console.log(1 || 0)
console.log(true|| 'hello')
console.log(null || undefined || 1)
console.log(null || undefined || 0) // при значении false выводится крайний аргумент


//Получение первого истинного значения из списка переменных или выражений.

let currentUser = null;
let defaultUser = "John";

let nam = currentUser || defaultUser || "unnamed";

console.log( nam );

//Сокращённое вычисление.

let z;
true || (z = 1);
console.log(z);

let x;
false || (x = 1);
console.log(x);
