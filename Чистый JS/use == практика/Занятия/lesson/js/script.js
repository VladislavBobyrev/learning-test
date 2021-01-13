let text = document.querySelector('.text')
let btn = document.querySelector('.btn')
let screen = document.querySelector('.screen')

let func = () => {
    screen.innerHTML = text.value
}

btn.addEventListener('click', func)




//обьекты ===============================
let obj = {
    ves: 2000,
    size: '2,5m',
    addres: {
        town: 'california',
        street: 'Masc',
        hous: 1,
    }
}
console.log(obj.ves);
obj.ves = 3000
console.log(obj.ves);

obj.car = 'Tesla'
console.log(obj);

obj['super sil'] = 'super speed 1000 km'
console.log(obj['super sil']);

// выведем значениеп свойства через переменную
// let key = prompt('Что вы хотите узнать о обьекте', 'addres')

// console.log(obj[key]);
// // выведем все свойства ерез for in
// for(let key in obj) {
//     console.log(key);
//     console.log(obj[key]);
// }
// целочисленные свойства выводятся по возрастанию
let cod = {
    '43': 'Германия',
    '49': 'Бельгия',
    '+9': 'США', // добавив + мы сделали свойство не целочисленным и оно выведется первым
}
console.log(cod);

let isEmptu = (obj) => {
    for(let key in obj) {
        key == true
        return false        
    }
    return true
}
console.log(isEmptu(obj)); 
// слодить суммы
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
 let sum = 0;
for (let key in salaries) {  
  sum += salaries[key]
    
}
console.log(sum);

// Умножить на 2

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  let multiplyNumeric = (menu) =>{
    for(let key in menu) {
       if (typeof menu[key] == 'number') {
           menu[key] *= 2
       }
    }    
  }
 multiplyNumeric(menu); 
console.log(menu);

// массивы ==============================
let massiv = [
    {userName: 'Vladislav', age: 25, many: 250000},
    {userName: 'Navalnyu', age: 21, many: 500000},
    {userName: 'MacGregor', age: 29, many: 90000},
]



