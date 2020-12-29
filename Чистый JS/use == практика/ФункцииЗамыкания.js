


// let func = (a) => {
//       a = 14;
//      console.log(a)
//  }

// function rez(a) {
//    a = 14
//     console.log(a)
// }
// rez(100);
tex(); //Происходит хоистинг функци и обявления переменныхы поднимаются на верх 

function text() {  
    console.log('text')
}
text(); // тк хоистинг прошел функция будет работать также
 

console.log(a)//выведется а не проинициализированна
let a = function text() {
    console.log('text')
}
console.log(a) // выведется функция полностью
// console.log(a)
// a = 1;
// if(a == 1) {
//     console.log('A : ', a);
// }

// let a;


