// &&


console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

let hour = 12;
let min = 30;

if (hour == 12 && min == 30) {
  console.log('12: 30')
}


if (1 && 0) {
  console.log("не сработает, так как результат ложный")
}


//если первый аргумент истинный и возвращает второй

//если первый аргумент ложный и возвращает его


console.log(1 && 2 && null && 3) // null
// и дуйствуетт до первого ложного если ложных нет и возвращаевт последний

let x = 1;
( x > 0) && console.log('hello')

