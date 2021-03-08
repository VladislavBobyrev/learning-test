


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




 let func = (a) => {
       a = 14;
      console.log(a)
  }

 function rez(a) {
    a = 14
     console.log(a)
 }
 rez(100);
 text(); //Происходит хоистинг функци и обявления переменныхы поднимаются на верх 

 function text() {  
     console.log('text')
 }
 text(); // тк хоистинг прошел функция будет работать также
 

 console.log(a)//выведется а не проинициализированна
 let a = function text() {
     console.log('text')
 }
 console.log(a) // выведется функция полностью
 console.log(a)
 a = 1;
 if(a == 1) {
     console.log('A : ', a);
 }

let a;




 let n // прошел  хоистинг обявление переменной поднялось вверх без присвоения значения поэтому она сейчас undefined
 console.log(n) //undefined
 n = 10 //тепрь мы присвоили значение 10 
 console.log(n) // 10
 n = 200 // присвоили 200
 console.log(n) //200


let a = 20 


 function foo(a) {
   
     boo();
    function boo() {
        console.log(a)
     }
 }

 foo(100)
 console.log(a)


 function xo() {
     console.log(a)
 }

 xo(14)

 function sum(a) {
    
         function (b) {
       a + b
     }
 }

 let result = sum(10)(20);
 console.log(result)


 function x(a) {
     let b = 20
      a ;
 }

 let v = x(10);
 console.log(v)
function sum() {
    function yoo() {
       console.log( 'I am function yooo')
    }
    return yoo;
}
let result = sum()
result();
