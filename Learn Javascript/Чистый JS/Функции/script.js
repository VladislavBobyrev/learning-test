 //+========== Код который работает сейчас =====
let userNameEl = document.getElementById('userNameEl')

setMaru(userNameEl);
sum();

// ================ Код который работает потом ===
function sum() {
    a = 20;
   console.log(a)
}


function setMaru(userNameEl) {
    userNameEl.value = 'Maru'
}


const num = 3;

 function sowMessage() {
     return (num > 0) ? console.log(true) : console.log(false);
 }

 sowMessage();

// function rezylt(userNme, text) {
//     console.log(userNme + ':' + text)
// }
 rezylt('Vlad', 'Horosh')

 function rezylt(userN, text){
	 console.log(`${userN} ${text}`)
 }

 function message(form, text = 'text no dobavlen') {
     from = '*' + from + '*';
     console.log(from + ':' + text)
 }

 let from = 'Anya';
 message(from, )



 function unef(text, form) {
     if (text === undefined) {
         text = 'Текст не добавлен';
     }
 
 }

 unef();

 function numb(a, b) {
     return a + b;
 }

 console.log(numb(1, 9));



 function checkAge(age) {
     if (age > 18) {
        return true;
     } else {
         return confirm('А родители разрешили?')
     }
 }

 let age = prompt('Сколько вам лет?', '')

 if (checkAge(age)) {    console.log('Доступ получен')
 } else {
     console.log('Доступ  закрыт')
 }





 function showPrime(n) {
     for( let i = 2; i < n; i++){
         if (!isPrime(i)) continue;
         console.log('Простое')
     } 
    }

 function isPrime(n) {
     for( let i = 2; i < n; i++) {
         if (n % i == 0) return false;
        
            
         }
         return true
     }
 showPrime(10)

  let a = 10;

 function hey() {
    a = 5;
    return (a);
   
 }

 let b = hey();
 console.log(a)

 function sum(a) {
    return function (b) {
        return a + b;
    }
 }
  let rezylt = sum(5)(27);
  console.log(rezylt)

 let name1 = "John";

 function sayHi() {
  return console.log("Hi, " + name1);
   }
  


 sayHi(); sayHi() ;
 function sum(a) {
     return function (b) {
         return a + b;
     }
 }

 let fanc =  sum(23);

  console.log(fanc(100))
// анонимная функция
  let rezylt = (function () {
     let a = 10;
     return function () {
         return {
             sayA : function() {
                 alert(a)
            }
         }
     }
  }) (); //вызовем функцию

 console.log(rezylt.sayA())




console.log(a)
 let a = 10;
let rezultGetAge = getAge();
getAge(19);
checkAge(15);
min(5, 7);
  
  
  function getAge(age) {       
     if (age > 18) {
         return console.log(true);      } 
         confirm('А родители разрешили?')
 }



    function checkAge(age) {
     return (age > 18) ? true : confirm('Родители разрешили?')
    }

   function checkAge(age) {
       (age > 18)|| confirm('А родитетли разрешили?')
   }


   function min(a, b) {
       if (a > b) {
           return cosnole.l(b);
          
       } else {
           return console.log(a);
       }
   }



