 
 let a = 2 + 2;

 switch (a) {
     case 3:
        alert('malo') 
         break;
     case 4:
         alert('v tohsky')
         break;
    
 }
 function  b () {
     return 1
 }
  console.log(b())

 switch (a) {
    case 3:
       alert('malo') 
        
    case 4:
        alert('v tohsky')
       
    case 5:
        alert('v tohsky')
       
    
}



let a = 1;
let b = 0;

switch (+a) {
    case  b + 1: alert('выполнитьсч тк б 0  + 1 = а тоесть 1')        
        break;

    default:
        alert('не ывполниться')
        break;
}

//================== Группировка case

let s = 2 + 2;

switch (s) {
    case 4:
        alert('Правильно')
        break;
    case 3:
    case 5:     alert('Может вам посетить урок математики?')
    aleret('Не правильно')
    break;
    default: 
    alert('Результат выглядит старнно')

}


let arg = prompt('Введите число?' )

    switch (arg) {
        case '0':
        case '1':
            alert('1 или 0')
            break;
    case '2': 
        alert('2')
    break;
    case '3': 
     alert('Никогда не выполниться')
    break;

        default:
            alert('Неизвестное значение')
            break;
    }

//============== 1

if (browser == 'edge') {
    alert('You've got the Edge!')
} else if ('Chrome'
    ||'Firefox'
    ||'Safari'
    ||'Opera' 
 ){
    alert('Okay we support these browsers too')
} else {
    alert('We hope that this page looks ok!')
}


//============== 2

const number = +prompt('Введите число' '')

switch (number) {
    case 0:
        alert('вы вывели число 0')
        break;
    case 1:
        alert('вы вывели число 1')
        break;
    case 2:
    case 3:    
        alert('вы вывели число 2 a может и 3')
        break;

   
}


//============== дз
    const q = (num1, num2) => {
        if (num1 > num2) {
            console.log(`${num1} больше чем ${num2}`)
        } else if(num1 < num2) {
            console.log(`${num1} меньше чем ${num2}`)
        } else  {
            console.log(` оба числа ${num2}`)
        }
    }

    q(8 , 8)