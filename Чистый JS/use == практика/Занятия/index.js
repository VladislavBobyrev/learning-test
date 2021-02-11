// =================   header
let btn = document.querySelector('.btn')
let res = document.querySelector('.res')

let task  = () => {
   res.innerHTML = ''

    for( let i = 7; i <= 20; i++) {
    res.innerHTML += i + '<br>'  
    
    }

}

btn.addEventListener('click', task)

// ==================    Section

let btn2 = document.querySelector('.btn2')
let startNum = document.querySelector('.startNum')
let endNum = document.querySelector('.endNum')
let res2 = document.querySelector('.res2')

let task2 = ()  => {
    res2.innerHTML  = ''

    for (let i = parseInt(startNum.value) ; i <=parseInt(endNum.value) ; i++){
        res2.innerHTML += i  + '<br>'
   
    }
}

btn2.addEventListener('click', task2 )

// ==================    Section


let party = {
    transport: 'car',
    marca: 'tesla',
    ofise: {
        adres: {
            town: 'Moscov',
            street: 'novaya',
            houm: '1',
        },
        rekvizits: {
            sber: '20039948928402',
            bitcoin: 'ioajfj439334j3903jr0j'
        },
    },
}

let copu =  party
console.log(copu == party);

let a = []
let b = []
console.log(a == b);

let clone = {}

for(let key in party) {
    clone[key] = party[key]
}

console.log(clone);
// Копируем все свойства из party
let one = {}
let two = {}

Object.assign(one, party)
console.log(one);

let btn3 = document.querySelector('.btn3')
let res3 = document.querySelector('.res3')
let clearScreen = () => res3.innerHTML = ''

let task3  = () => {    
    clearScreen()
    for (let i = -5; i < 5; i++ ) {

        if (i == 0) continue
        res3.innerHTML += i + '<br>  '      
    }
        
     
}

btn3.addEventListener('click', task3)

// ==================    Section

let btn4 = document.querySelector('.btn4')
let res4 = document.querySelector('.res4')
let clearScreen4 =  () => res4.innerHTML = ''

let task4 = () => {
    clearScreen4()
    
    for (let i = 20; i > 7 ;  i--) {
        
        res4.innerHTML += i + '\n'
    }
}

btn4.addEventListener('click', task4)

// ==================    Section

let btn5 = document.querySelector('.btn5')
let res5 = document.querySelector('.res5')
let zvezds = '***'

let clearScreen5 = () => res5.innerHTML = ''

let task5 = () =>  {
        clearScreen5()
    let res = ''

for (let i = 0; i <= 30; i++) {
      res += i
      res += zvezds + '<br>'
     
    } 
    res5.innerHTML = res
   
}

btn5.addEventListener('click', task5)






// ==================    Section

let btn6 = document.querySelector('.btn6')
let res6 = document.querySelector('.res6')

let clearScreen6 = () => res6.innerHTML = ''
let res = '' 
let zvezda = ''

let task6 = () => {
    clearScreen6()
   

    for(let i = 0; i < 30 ; i++) {          
        let randomNum = Math.floor(Math.random() * 10 )
         zvezda = ''   
        for ( j = 0; j <= randomNum; j++) {
           
            zvezda += '*'
                      
        }      
        res += zvezda  + '<br>'
        res6.innerHTML = res 
        
    }
   
}

btn6.addEventListener('click', task6)
// ==================    Section

let btn7 = document.querySelector('.btn7')
let res7 = document.querySelector('.res7')

let clearScreen7 = () => res7.innerHTML = ''

let task7 = () => {
    clearScreen7()
    let randomNum = Math.floor(Math.random() * 10) + 1
        if ((randomNum % 2 == 0) || (randomNum % 3 == 0)) {
            res7.innerHTML = randomNum
        }  else {
            res7.innerHTML = `Не делиться не 3 и 2, число ${randomNum}`
        }  
}
btn7.addEventListener('click', task7)

// ==================    Section

let btn8 = document.querySelector('.btn8')
let res8 = document.querySelector('.res8')

let clearScreen8 = () => res8.innerHTML = ''


let task8 = () => { 
    let  randomNum  = '' 
    let i = 0
        while (i <= 15) {
           
            do { 
                randomNum = (Math.random * 100) + 1
            }  while ((randomNum % 2 == 0 ) || (randomNum % 3 == 0)) {
                res8.innerHTML = randomNum
            }
             i++
    }
        
}
btn8.addEventListener('click', task8 )

//let user = new Object() // Синтаксис  Обьекта
//let user2 = {
//    userName: 'Mary',
//    age: 29,
//} //синтаксис литерал

//console.log(user2.age)
//let key = prompt('', 'age')
//console.log(user2[key])

// Синтаксис массива
//let scoup = [60, 50, 60, 58, 298, 58, 93];

//let clone = scoup
//console.log(clone[2])

//let text = ['onFormal', 'formal', 'text']

//console.log(text[1])
//text[1] = true

//console.log(text[1])
//console.log(text)

//let numFavorits = text.length

function makeFrazes() {
    let word1 = ['24/7', 'Eashe', 'day','ticket', 'cloud', 'apposits']
    let word2 = ['мы', 'команда', 'сотрудники ','персонал', ]
    let word3 = ['работаем', 'отдызаем', 'зарабатываем','едим тортик',]

    let rand1 = Math.floor(Math.random() * word1.length)
    let rand2 = Math.floor(Math.random() * word2.length)
    let rand3 = Math.floor(Math.random() * word3.length)
    
    let phrase = `${word1[rand1]}  ${word2[rand2]}   ${word3[rand3]}`
    console.log(phrase)
} 
makeFrazes()
//Числа

let num = 456
console.log(num)
 //Запишим нули после цифры
    num = 5e6 //5 * 1000000
    console.log(num)
    num = 7e-5
    console.log(num)
    console.log(num.toString(2))

    let one = Math.floor(5.8)
    let two = Math.round(2.4)
    let three = Math.ceil(-2.2)
    console.log(one)
    console.log(two)
    console.log(three)
    let bigNum = 9.8375937459
    // 3 знака после запятой ту фиксед
    console.log(bigNum.toFixed(3))

    //Проблемма плавающих точек
    let problems = 0.1 + 0.2 === 0.3
    console.log(0.1 + 0.2)

    let min = 1.005 + Number.EPSILON
    let numFor = Math.round(min * 100) / 100
    console.log(numFor)

    // Проверка  is NAN
    console.log(Number(25 + 'hello'))
    console.log(isNaN(25 + 'hello'))

    // parseInt
    let pars = +'150'
    console.log(pars)
    console.log(typeof pars)
    let pars1 = +'150px'
    console.log(pars1)
    console.log(typeof pars1)
    // parseFloat
    let parse = parseInt('150.58px')
    console.log(parse)
    let parse1 = parseFloat('150.58px')
    console.log(parse1)

    // math
    console.log(Math.random()) 
    console.log(Math.max(5, 82, 49)) 
    console.log(Math.min(5, 82, 49)) 
    let nummer = -58
    console.log(Math.abs(nummer)) 
    console.log(Math.pow(5,9))

    //  Задачи

    let numeOne = Math.round((1.005 + Number.EPSILON) * 100) / 100
    console.log(numeOne )

    let str = '150.180px'
    console.log( parseFloat(str))
    

    let example = 58 + 'sourse'
    if (example == NaN) {
        console.log('Результат выражения NAN')
    }

    
    console.log(Math.max(10, 49, -169, 0))
 


    let x = 159.158
   
   console.log(parseInt(x)) 
let g
let gameRules = {
  diceNumber: 1,
  maxAttempts: 1
};

let firstCat = {
  name: 'Кекс',
  points: 0
};

let secondCat = {
  name: 'Рудольф',
  points: 0
};

let thirdCat = {
  name: 'Рокки',
  points: 0
};

let cats = [firstCat, secondCat, thirdCat];

let runGame = function (rules, players) {
  for (let currentAttempt = 1; currentAttempt <= rules.maxAttempts; currentAttempt++) {
    for (let i = 0; i < players.length; i++) {
      let throwResult = keks.throwDice(rules.diceNumber, rules.diceNumber * 6);
      players[i].points += throwResult;
      console.log(players[i].name + ' выбросил ' + players[i].points);
    }
  }
  return players;
};

let getWinners = function (players) {
  let winners = [];
  let max = players[0];

  for (let i = 0; i < players.length; i++) {
    let currentPlayer = players[i];
    if (currentPlayer.points > max.points) {
      max = currentPlayer;
      winners = [max];
    } else {
      if (currentPlayer.points === max.points) {
        winners.push(currentPlayer);
      }
    }
  }

  return winners;
};


let printWinners = function (players, winners) {
  if (players.length === winners.length) {
    console.log('Все коты как на подбор!');
    return;
  }

  let message = 'Победил ';
  if(winners.length > 1){
    message = 'Победили '
    }
  for (let i = 0; i < winners.length; i++) {
    if(i >= 1){
      message += ', '
      }
    message += winners[i].name;
  }

  message += ' с количеством очков: ' + winners[0].points;

  console.log(message);
};

cats = runGame(gameRules, cats);

let tops = getWinners(cats);

printWinners(cats, tops);ameRules

let name1 = {
  name:"Васька",
  goals:0,
  passes:0,
  }
let name2 = {
  name:"Байт",
  goals:0,
  passes:0,
  }
let name3 = {
  name:"Снежок",
  goals:0,
  passes:0,
  }  
let players = [name1, name2, name3]

let getStatistics = function (players) {
  let coefficient = 0
  let allGol = 0
  let percent = 0
  
  for(let i = 0; i < players.length; i++){
   allGol += players[i].goals 
    
  }  
  
  for(let i = 0; i < players.length; i++){
    percent = Math.round((players[i].goals * 100) / allGol )
    coefficient = players[i].goals * 2 +  players[i].passes 
   players[i].coefficient =  coefficient
   players[i].percent = percent
  }
  return players
};

getStatistics(players)

/* Техническое задание

Мяу! Мне нужна программа, которая подсчитает полезность и результативность игроков на основе их статистики. Оформи код в виде функции getStatistics с одним параметром — массивом игроков.

Каждый футболист в этом массиве описывается объектом с тремя полями: имя (свойство name), забитые голы (свойство goals) и голевые пасы (свойство passes).

Функция должна возвращать этот же массив, в котором каждому игроку добавлены ещё два поля: коэффициент полезности по Кексу® (свойство coefficient) и результативность (свойство percent).

Коэффициент полезности считается так: умножаем голы игрока на 2 (потому что я считаю, что голы важнее всего) и прибавляем к этому значению все голевые пасы футболиста.

Результативность (процент забитых мячей футболиста от результата всей команды) считаем так: находим сумму голов всех игроков и выясняем, сколько процентов от этого числа забил каждый футболист. Округляй значение с помощью Math.round.

*/
let displayPrice = {
  13: 5000,
  15: 10000
};

let memoryPrice = {
  8: 3000,
  16: 4000
};

let buildComputer = function (memory, display, processor) {
  let computer = {
    basicPrice: 5000,
    processor: processor,
    display: display,
    memory: memory,

    getDescription: function () {
      return 'компьютер с процессором ' + computer.processor + ', диагональю ' + computer.display + ', оперативной памятью ' + computer.memory;
    },

    getPrice: function () {
      return computer.basicPrice + processorPrice[computer.processor] + displayPrice[computer.display] + memoryPrice[computer.memory];
    },
  };

  return computer;
};

let myComputer = buildComputer(8, 13, 'i7');
console.log('В корзине ' + myComputer.getDescription() + ' стоимостью ' + myComputer.getPrice());

let materialPrice = {
  'wood': 1000,
  'stone': 1500,
  'brick': 2000,
};
let house = {
  rooms: 10,
  floors: 5,
  material:'wood',
  coefficient: 10.5,
  //создаем метод и передаем в него объект через зис, вызываем в другой функции , берем комнату коэф и результат возвращаем
  calculateSquare: function(obj) {
    return this.rooms * this.coefficient * this.floors // в контексте зис ничего нет пока мы не у обьекта не вызовем метод и тогда зис будет принимать обьект 
    },
    // обьявляем метод и результат функции умножаем на материал который записан а house.material и если он есть у materialPrice то подставиться значение ключа
  calculatePrice: function() {
    return  house.calculateSquare() * materialPrice[house.material]
    }
};



  


  
/* Техническое задание

Мяу! Допиши за меня конфигуратор. Я создал объект house и задал ему несколько свойств: rooms (количество комнат), floors (этажи), material (материал для стен), coefficient (средняя площадь каждой комнаты).

Ещё я завёл мапу materialPrice, в которой записал стоимость каждого возможного материала для строительства.

Добавь в объект два метода: calculateSquare, который будет возвращать площадь дома, и calculatePrice, который будет возвращать стоимость строительства.

Площадь считай так: умножь количество комнат на коэффициент и число этажей в доме.

Цена строительства — произведение площади и стоимости материала дома.

*/
