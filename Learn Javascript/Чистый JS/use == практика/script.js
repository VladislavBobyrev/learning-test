//Обекты имеют свойства и значения
    let obj = {
            name: 'BMV',
         age: 28,
         work: 'startUp',
         "love js": 'true',
         }


        //  exercise ===================================================================
        let firstPart =  'likes';
//     Можем передать в качестве значения переменную
        let userInfo = {
            name: 'Mary',
            age: 28,
            [firstPart + 'javascript']: true, 
            
        };
        console.log(userInfo["likes + javascript"]);
        
//ecercise ==================================================================

let firstName = 'Vlad'
let persInfo = {
    name: 'Mary',
    age: 28,
    [firstName]: true,
}
let key = 'age'
// с помошью квадратных скобок можем передавать параметрам имя переменной
console.log(persInfo[key]);

// ecercise ==================================================================
// Зарезервированные именя можем передавать и указывать как свойство и не будет ошибки

let rezerv = {
    for: 'Для',
    if: 'если',
    let: 'лет',
    0: 25,
    $: 99,
    //$ становиться строкой
}
console.log(rezerv['for']);
console.log(rezerv['$']);

// ecercise ==================================================================

// Символ это уникальный идентификатор 
let id = Symbol('id ')

let secret = {
// с помошью евго мы можем скрыть свойство от фор ин
    [id]: 'Некоторое значение'
}
console.log(secret.id);

//ecercise ==================================================================

let addres = {
    name: 'vald',
    age: 25,
    address: {
        sity: 'Belgorod',
        street: 'rehsnaya',
    }
}

console.log(addres['name']);
console.log(addres['address']);
console.log(addres.address.sity);

//ecercise ==================================================================
let makeUserInfo = (userName, age) => {
    return {
        userName, //свойство будет тоже самое  что и age: age,
        age: age,
    }
}
let user = makeUserInfo('vald', 25)

console.log(user);

// ecercise ==================================================================

let vasua =  {
    age: 25,
    sity: 'BG'
}
console.log(vasua);
// Записываем в обьект свайство имя со занчение Владислав
vasua.name = 'Vladislav'
console.log(vasua.name);
vasua['javascript'] = 'js'
//  Залпиь через квадратные скобри с расширенными возможностями
console.log(vasua['javascript']);

console.log(vasua);

vasua.obj = {
    street: 'rshn',
    
    // Изменение свойства  внутри обьекта можно даже в константе =====
const vaska = {
    name: 'food',
    age: 99,
    sity: 'moscov',
}
console.log(vaska.sity);

vaska.sity = 'BG'
console.log(vaska.sity);

// ecercise ==================================================================

// При копировании обьекта копируется ссыдка на него а не сам обьект

const vasek = {
    name: 'food',
    age: 99,
    sity: 'moscov',
}
console.log(vasek);
//  имени скопированый обьект в переменной х он измениться в васек 
let x = vasek
console.log(x);
x.age =  1
console.log(vasek);

// ecercise ==================================================================
//  Дублирование обьектов

const userVasya = {
    name: 'Vasya',
    age: 33,
}
console.log(userVasya);
const xx = Object.assign({}, userVasya)
xx.age = 889
console.log(xx);

const a = {
    name: 'alena',
    age: 88,
}
Object.assign(a, {likes: 'love', sity: 'Moscov'})
console.log(a);

//ecercise ==================================================================

//Проверка существования свойства

const sUser = {
    coco: undefined,
    name: 'secret',
    age:'one',
     addres: {
         sity: 'bg',
         street: 'resn'
     }
}
//console.log(sUser.addres.street); // если свойства не будет такого в обьекте по былет ошибка
// Опциональная цепочка проверяет наличие свойств и если его нет не вызовет ошибку  будет undefined
// console.log(sUser?.addres?.street);


if (sUser.age) {
    console.log(sUser.age);
    
}
if ('name' in sUser) {
    console.log(sUser.name);
    
}
// if (sUser.coco) {
//     console.log(sUser.);
    
// } Если значение undefined  то нужно воспользоваться in
if ('coco' in sUser) {
    console.log(sUser.coco);
    
}


for( let key in sUser) {
    //ключи
   // console.log(key);
    //Значения ключей
    console.log(sUser[key]);
    
}   
for (let key in sUser.addres) {
    console.log(key);
    
    console.log(sUser.addres[key]);
    
}

let  sneg = {
    name: 'snegok',
    age: 1,
    addres: {
        sity: 'moscov',
        yl: 'novaya',
    },
    showIfo () { //  У СТРЕЛОЧНЫХ функци й нет своего this
        let xxx = () => console.log(`${this.name}, тебе ${this.age} год. Адрес: Г. ${this.addres.sity} улица ${this.addres['yl']}  `);
        
        // console.log(`${sneg.name}, тебе ${sneg.age} год. Адрес: Г.${sneg.addres.sity} улица ${sneg.addres.yl}  `); вместо имя обьекта можно писать this
      //  console.log(`${this.name}, тебе ${this.age} год. Адрес: Г. ${this.addres.sity} улица ${this.addres['yl']}  `) 
      xxx()       
    }
}
sneg.showIfo()

let userSneg = sneg;
sneg = null
userSneg.showIfo()

//Функция конструктор ===============================================================

function userVse (userName) {
    this.userName =  userName
    this.age = 30
}

console.log(new userVse('vasya'));
console.log(new userVse('COCO'));

//DZ =========================================================================================
// const userIfo = {
//     name: 'vasua'
//     age: 30
// }
//запись не верна тк нет запятой

const userIfo = {
         name: 'vasua',
        age: 30,
        '58': 'Значение свойства'
    }
    console.log(userIfo[58]);
let user = userIfo
user.age = 12
console.log(userIfo.age);// 12 тк мы передали ссылку на обьект усеру и изменили в ней возраст

let  userInfo = {
    name: 'vasua',
   age: 30,
   '58': 'Значение свойства',
   showInfo () {
       console.log(this.name);
       
   },
}


let user = userInfo
userInfo = null
user.showInfo()

let vladUser = {
    name: 'Vlad',
    age: 24,
    addres: {
        street: 'novoya'
    }
}
    for( const key in vladUser) {
       let value = vladUser[key]
        console.log(value);
        
    }
    for(let key in vladUser.addres) {
        console.log(vladUser.addres[key]);
        
    }

    let userVlad = {}
    userVlad.name = 'Vlad'
    console.log(userVlad.name);    
    userVlad.age = 25
    console.log(userVlad.age);    
    userVlad.name = 'lena'
    console.log(userVlad.name);
    
    delete userVlad['name']
    console.log(userVlad.name);
    


    dom: 1,
}

console.log(vasua);

// Удаляем свойства ========

delete vasua['javascript']

console.log(vasua);


// строки  '', "", ``
let text = "Я строка"
text = 'Я строка'
text = `Я строка`  //в косые запятые можно вставить  выражение

let message = `Hello ${text}`
console.log(message)

let func = (a, b) => a * b

console.log(`summa: ${func(4,7)}`)

text = `hello
we by shenale
Frilanser to life`
console.log(text)

let someString = '158' // string
let num = 158
 console.log(someString + num) // nomber
// перевод строки \n
 text = "hello \nVladislav \nwhot is your name?"
console.log(text)
// табуляция \t
text = 'helo world \n\t how are you?'
console.log(text)
// Обратный слэш \\ 

text = " hello my name is \\ valdislav"
console.log(text)
text = 'hello my name is  \"valdislav\"'
console.log(text)

// Смайлики
text = " hello my name is \\ valdislav \u00A9 \u{1F60D}"
console.log(text)

//длинна строки
console.log(text.length)

// получаем символы строки

text = 'hello'
let firstSymbol = text[0] // onw
let lsatSymbol = text[text.length -1] // last   
console.log(lsatSymbol)
console.log(firstSymbol)

for(let chair of text) {
    console.log(chair)
}

//  Изменеие строки
 text[2] = '&' //  не поменяется 
 console.log(text)

// Изменение регистров

console.log(text.toUpperCase()) 
console.log(text.toLocaleLowerCase())

// поиск подстрок
console.log(text.indexOf('ll'))
console.log(text.indexOf('o'))
console.log(text.indexOf('h'))
console.log(text.indexOf('q')) // совпаденимй нет выведет -1

// includes
console.log(text.includes('h')) // true
console.log(text.includes('[')) // false

//startWidth
console.log(text.startsWith('he'))
console.log(text.endsWith('o'))


// регистр имеет значение
text = 'Hello'
let searsh = 'hE'
console.log(text.toLocaleLowerCase().includes(searsh.toLocaleLowerCase()))

//slice(start[, end]) возвращает часть строки от старт до енд не включая
console.log(text.slice(0,4))
console.log(text.slice(-2,-1))
console.log(text.slice(1))

//сравнение строк
console.log('A' > 'B') //  б в алфавитном порядке больше а

console.log('vald' > 'vald')

// dz
// one away
text = 'Freelanser'
let simv = text[6]
// two away
console.log(simv)
console.log(text[6]) 

// верхоний регистр toUppercase
console.log(text.toUpperCase())

// Подстроки
console.log( text.slice(4,7))

// true || foolse
console.log(text.includes('lan',4))



