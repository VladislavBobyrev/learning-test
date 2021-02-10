// Алфавит let diceNumber = 2;

let firstCat = {
  name: 'Кекс',
  points: 0
};

let secondCat = {
  name: 'Рудольф',
  points: 0
};

let cats = [firstCat, secondCat]
let runGame = function (quantity, players) {
  for(let i = 0; i < players.length; i++){
    console.log(players[i])
    }
};

runGame(diceNumber, cats);

let symbols = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я', ' ', '.', ',', '—', '!'];

// Закодированное сообщение
let encodedMessage = [18, 38, 46, 62, 66, 50, 33, 41, 66, 49, 48, 38, 58, 62, 68, 66, 48, 37, 42, 47, 66, 50, 33, 41, 66, 49, 48, 51, 49, 42, 67];

// Раскодированное сообщение

 let  decodedMessage = ''


for(let i = 0; i < encodedMessage.length ; i++){

decodedMessage += symbols[encodedMessage[i]]

  }
  

/* Техническое задание

Мяу! Я научился шифровать и мне нужна программа расшифровки.

Есть массив symbols, в котором хранится алфавит (буквы и другие символы).

Есть массив encodedMessage, в котором хранится зашифрованное сообщение. Каждый элемент этого массива — это индекс символа из массива symbols.

Программа дешифровки должна переводить элементы из массива с шифровкой (encodedMessage) в символы из массива алфавита (symbols) и склеивать из них расшифрованную строку. Эту строку запиши в переменную decodedMessage.

*/let expectedUsers = 1000;

let usersByDay = [817, 1370, 752, 1247, 681, 1120, 915, 1281, 875, 1341, 757, 610, 812, 1170, 769, 1261, 845, 1289, 515, 1247, 845, 1311, 741, 1239, 812, 638, 877, 1242, 1159, 1372];

// Рисуем график посещаемости
keks.plot(usersByDay, expectedUsers);

// Суммируем посещаемость
let totalUsers = 0;
for (let i = 0; i <= usersByDay.length - 1; i++) {
  totalUsers += usersByDay[i];
}


// Рассчитываем среднее значение посещаемости
let averageUsers = totalUsers / usersByDay.length;
console.log('Средняя посещаемость: ' + averageUsers);

if (averageUsers > expectedUsers) {
  console.log('Посещаемость великолепна. Продолжай в том же духе!');
} else {
  console.log('Посещаемость так себе. Нужно поднапрячься!');
}
let score = 0;
let total = 0;
let victoryPoints = 100;
let misses = 0;

while (total < victoryPoints) {
  if (misses >= 3) {
    break;
  }

  score = keks.getScore();

  if (score < 0) {
    console.log('Промах!');
    misses++;
  } else {
    total += score;
    console.log('Результат броска: ' + score);
  }
 
}
 if(total >= victoryPoints ) {
  console.log('Победа! Очков: ' + total + ', промахов: ' + misses)
  } else {
   console.log('Проигрыш. Очков: ' + total + ', промахов: ' + misses ) 
  }let days = 9; // Дней в периоде
let evenDayAmount = 200; // Количество протеина в чётные дни
let oddDayAmount = 100; // Количество протеина в нечётные дни
let total = 0; // Общее количество протеина

for(let i = 2; i <= days; i += 2) {
  total += evenDayAmount
}

for(let i = 1; i <= days; i += 2) {
  total += oddDayAmount 
}



/* Техническое задание

Мяу! Программа должна считать сколько протеина я должен выпить за весь тренировочный период.

В чётные дни я пью 200 грамм. В нечётные 100 грамм.

Количество дней хранится в переменной days, количество протеина для приёма в чётный день — в переменной evenDayAmount, протеин в нечётный день — в переменной oddDayAmount, а результат необходимо записать в переменную total, которая уже задана.

*/
let sum = 0;

for (let i = 1; i <= 10; i++) {

  // Добавляйте условие сюда

  sum += i;
  console.log('i: ' + i);
  console.log('sum: ' + sum);
}
let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

canvas.width = window.innerHeight
canvas.height = window.innerWidth


ctx.beginPath()
ctx.arc(80, 100, 40, 3/4 * Math.PI, 1/4 * Math.PI, true )
ctx.fill()
ctx.moveTo(30,100)
ctx.lineTo(30,0)
ctx.lineTo(90,70)
ctx.lineTo(100,100)
ctx.lineTo(50,50)

canvas.height = 480;
canvas.width  = 640;
ctx.beginPath();
ctx.moveTo(10, 15);
ctx.bezierCurveTo(75, 55, 175, 20, 250, 15);
ctx.moveTo(10, 15);
ctx.quadraticCurveTo(100, 100, 250, 15);
ctx.stroke();

ctx.strokeStyle = "red";\

ctx.strokeStyle = '#B70A02'
ctx.strokeRect(15, 15, 266, 266)
ctx.strokeRect(18, 18, 260, 260)
ctx.strokeStyle = '#AF5200'
ctx.fillRect(20, 20, 256, 256)
for(let i = 0; i < 8; i += 2) {
    for(let j = 0; j < 8; j += 2) {
        ctx.clearRect(20 + i * 32, 20 + j * 32, 32, 32);
        ctx.clearRect(20 + (i + 1) * 32, 20 + (j + 1) * 32, 32, 32);
    }
}
ctx.fillStyle = 'red'
ctx.fillRect(500,300, 200, 200)


ctx.fillStyle = '#ccddff'
ctx.beginPath()
ctx.moveTo(500, 80)
ctx.lineTo(400, 80)
ctx.lineTo(350, 130)
ctx.closePath()
ctx.fill()
ctx.strokeStyle = 'red'
ctx.lineWidth = 5

ctx.stroke()

ctx.fillStyle = 'red'
ctx.beginPath()
ctx.moveTo(10,30)
ctx.bezierCurveTo(50, 90, 159, -30, 200, 30)
ctx.lineTo(200, 90)
ctx.lineTo(10, 90)
ctx.closePath()
ctx.fill()
ctx.lineWidth =4 
ctx.strokeStyle = 'black'
ctx.stroke()



let grad = ctx.createLinearGradient(0, 0, 300, 00 )
grad.addColorStop(0, 'white')
grad.addColorStop(.5, 'blue')
grad.addColorStop(1, 'green')
ctx.fillStyle  = grad
ctx.fillRect(0, 0, 1600 ,400)
ctx.fillStyle = "black";
ctx.font = "italic "+96+"pt Arial ";
ctx.fillText("Hello world", 20,150);
let temperature = 20;
let itsRaining = false;

let minutes;



itsRaining ? minutes = 0 :
temperature < 0 || temperature > 35 ? minutes = 0 :
temperature == 20 ?  minutes == 20 :
temperature < 20 ?   minutes = 20 - (20 - temperature)  :
temperature > 20 ?   minutes = 20 - (temperature - 20)  :
''




/* Техническое задание

Мяу! Длительность прогулки зависит от нескольких условий.

Во-первых, если идёт дождь, прогулка не может состояться. В этом случае длительность прогулки должна равняться 0.

Во-вторых, если температура слишком низкая (ниже 0°C) или слишком высокая (выше 35°C), прогулка тоже не состоится.

В-третьих, идеальная температура для прогулки — 20°C. В этом случае прогулка длится 20 минут.

В остальных случаях длительность прогулки уменьшается на минуту с каждым градусом отклонения от идеальной температуры: при 19°C или 21°C длительность составит 19 минут, при 18°C или 22°C — 18 минут и так далее.

*/let number = 15;
let taskResult;

number % 3  == 0  && number % 5 == 0? taskResult = 'FizzBuzz':
number % 5  == 0  ? taskResult = 'Buzz':
number % 3  == 0  ? taskResult = 'Fizz' :
taskResult = number
console.log(taskResult)

/* Техническое задание

Программа должна анализировать числа.

Если число делится на 3, результат работы программы — строка 'Fizz'.

Если число делится на 5 — строка 'Buzz'.

Если число одновременно делится на 3 и на 5 — результат 'FizzBuzz'.

В остальных случаях результат работы программы — изначальное число.

Число записано в переменную number.

Результат работы программы записывайте в переменную taskResult.

*/

let weight = 5;
let recommendation;

 weight < 4 ? recommendation = 'Пора перекусить' :
 weight >= 4 &&  weight <= 5.5 ? recommendation = 'Вес в норме' :
recommendation = 'Пора на тренировку'

 
/* Техническое задание

Мяу! Запрограммируй умные весы, чтобы они давали рекомендации в зависимости от веса.

Вес записан в переменную weight.

Рекомендацию записывай строкой в переменную recommendation.

Если вес до 4 кг (не включая это значение), рекомендация – 'Пора перекусить'.

Если вес от 4 кг включительно до 5.5 кг включительно – 'Вес в норме'.

Если вес больше 5.5 кг – 'Пора на тренировку'.

*/
let age = 5;
let ageGroup 
 age <= 1 ? ageGroup = 'Котята' :
 age > 1 && age <= 3 ?  ageGroup = 'Молодые коты' :
 age > 3 && age <=7 ? ageGroup = 'Коты средних лет' :
 ageGroup = 'Почтенные коты'



/* Техническое задание

Мяу! Напиши программу, которая будет определять возрастную группу по возрасту.

Возраст записан в переменную age.

Проверяй возраст и записывай возрастную группу в виде строки в переменную ageGroup.

Если возраст до года включительно, то возрастная группа называется 'Котята'.

Если возраст от года (не включая это значение) до трёх лет включительно — 'Молодые коты'.

Если возраст от трёх лет (не включая это значение) до семи (включительно) — 'Коты средних лет'.

А если возраст от семи лет (не включая это значение) и больше — 'Почтенные коты'.

*/
let temperature = 20;
let isRaining = true;
let minutes = 0;
// 1 exemle
if(isRaining  ) {
  minutes = 0
}  else if (10 <= temperature < 15) {
    minutes = 30    
  }  else if (15 <= temperature < 25 ) {
    minutes = 40
    }  else if (25 <=  temperature <= 35) {
      minutes = 20
      } else {
        minutes = 0
      }
// 2 exemle   
    isRaining ?  minutes = 0 :
    10 <= temperature && temperature< 15 ? minutes = 30 :
    15 <= temperature && temperature< 25 ? minutes = 40 :
    25 <= temperature && temperature <= 35 ? minutes = 20 :
    minutes = 0
      
      
/* Техническое задание

Мяу! Длительность прогулки зависит от нескольких условий.

Если идёт дождь, гулять я не хожу. В этом случае длительность прогулки равняется 0. А вот если дождя нет, всё зависит от температуры на улице:

Во-первых, если температура от 10°C (включительно) до 15°C (не включая это значение), я гуляю 30 минут.

Во-вторых, если температура от 15°C (включительно) до 25°C (не включая значение), я гуляю 40 минут.

В-третьих, при температуре от 25°C (включительно) до 35°C (включительно), я гуляю 20 минут.

В остальных случаях я никуда не выхожу: либо очень холодно, либо очень жарко.

Результат программы – время прогулки. Его необходимо записать в переменную minutes.

*/
let optimalTime = 80;
let walkTime = 80;

if (walkTime >= optimalTime) {
  console.log('Прогулка достаточно длинная');
} else {
  console.log('Нужно ещё погулять');
}

let euroRate = 74;
let dollarRate = 63;

let euroAmount = 500;
let dollarAmount = 2500;



let rublesAmount = (euroAmount * euroRate) + (dollarAmount * dollarRate)


/* Техническое задание

Напиши программу, которая посчитает сколько всего рублей понадобится на поездку.

Курсы валют указаны в переменных euroRate и dollarRate.

Переменные euroAmount и dollarAmount— необходимые суммы на поездку.

Создай переменную rublesAmount и записывай в неё результат вычислений.

*/

let pixels = document.querySelectorAll('.pixel')
let chosenColor = document.querySelector('.chosen-color')
let eraser = document.querySelector('.eraser')


 
 chosenColor.onchange = function () {
      chosenColor.style.backgroundColor =  chosenColor.value

    for (let i of pixels) {
  
i.onclick = function() { 
  console.log(eraser.checked) 
  if (eraser.checked) {
    i.style.backgroundColor = 'white' 
  } else {
    i.style.backgroundColor = chosenColor.value 
  }
  }
 }
}  


/*

1. Все «пиксели» имеют класс pixel.
2. Выпадающий список с цветами имеет класс chosen-color.
3. «Ластик» — это чекбокс с классом eraser.
4. Когда на «пиксель» кликают, у него должен измениться цвет фона.
5. Если в момент клика ластик выключен, фон нажатого «пикселя» должен стать того цвета, который выбран в списке.
6. Если в момент клика ластик включён, фон нажатого «пикселя» должен стать белым — 'white'.

*/

// Прототипы
const person = {
    name: 'Vlad',
    age: 25,
    greet: function () {
        console.log('Greet')
    }
}

const person = new Object ({
        name: 'Vlad',
     age: 25,
     greet: function () {
            console.log('Greet')
     }
     })

     Object.prototype.sayHello = function () {
         console.log('hello')
     }

     const lena = Object.create(person)
     lena.name = 'eleт'

     const str = new String('i am string') 
     //
if (1 == !true) {
    console.log('Hello world');
}
//
if (1 == !false ) {
    console.log('How');
}
let user = {
    name: 'jon',
    age: 25,
    func() {
        console.log('hello');
    }
}



user.func()
