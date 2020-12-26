let year = prompt('В каком году была выпущена спецификация ECMAscript-2015','')

if (year == 2015) {
    console.log('Вы правы!')
    console.log('Великолепные знания')
}

if (0) {
    console.log('Этот код не выполниться тк условие 0 "" nan falsw undefined ложные значения')
}

if (1) {
    console.log('Этот код выполниться тк условие true ,оно не nan, undefined, 0, "", false  ')
}


let condition = (year == 2015)

if (condition) {
    console.log('Верно')
}

//============  Else  ==========




if (condition) {
     console.log('Verno')
} else if (!condition) {
    console.log('not a namer')
 }




 let yearX = prompt('V kakom godu&')
if (yearX > 2015) {
    console.log('Pozdno')
} else if (yearX < 2015) {
    console.log('rano')
} else {
    console.log('verno')
}

// та же функция только стрелочная
const num4 = 2015;

const yearC = ( num4 ) => {
    (yearC > 2015) ? console.log('pozdno') :
    (yearC < 2015) ? console.log('rano') :
    console.log('verno111')
}
console.log(yearC(2015))

//Напиши теперь функцию, которая принимает два числа и возвращает строку, например "1 меньше чем 7"
 
//Это если передал числа 1 и 7
 
//Если передал числа 6 и 5, то ответ будет "6 больше чем 5"
 
//А если передал 8 и 8, ответ будет "оба числа 8"

const q = (num1, num2) => {
    if (num1 > num2) {
    console.log(`${num1} больше чем ${num2}`)
    } else if(num1 < num2) {
    console.log(`${num1} меньше чем ${num2}`)
    } else {
    console.log(` оба числа ${num2}`)
    }
    }

    console.log(q(6,5))

    //====== ? ============
// let accessAlowed;
let age = prompt('Сколько Вам лет?')
// if (age > 18) {
//     accessAlowed = true
// } else {
//     accessAlowed = false
// }

// alert(accessAlowed)

//c помошью ?

let accessAlowed = (age > 18) ? true : false;
console.log(accessAlowed)
//Запись короче и читабельнее

//Несколько операторов ???

let vozr = prompt('Boзраст ?', '')

let Message = (vozr < 3) ? console.log('Malihs') :     
    (vozr < 18) ? console.log('podrosti') :
    (vozr < 100) ? console.log('dobro pozalovat') :
    console.log('neobishnyi vozr')