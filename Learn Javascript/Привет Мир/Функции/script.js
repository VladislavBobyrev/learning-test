function sowMessage() {
    console.log('Квант электромагнитного поля, фонон')
}
sowMessage();

function messsage() {
    let message2 = "Привет, я JavaScript!";
    alert(message2)
}

messsage();
// alert(message2) ывведет ошибку тк переменная меыыедж2 видна только внутри  функции

let userName = 'Vadislav'

function rezult () {
    let text = ` hello ${userName}`
    console.log(text)
}
rezult()

function two () {
    userName = 'Maru' // функция создал асвою переменную и не трогает переменную за функцией
    let rezult = `${userName} welcome to zemlya`
    alert(rezult)
}

alert(userName) // переменная не изменена тк она не видит то что внутри функции

two() // мы модем обратиться к переменной внутри функции  и изменить ее значение внутри жтой функции но не снаружи

function welcome ( from, text = "text no dobavlen") { //устанавливаем значение по умолчанию 
    alert( from + ' : ' + text)
}
welcome('Anya');

function sum (a, b) {
    return a + b;
}
 rezult = sum(5,4);
alert(rezult)

function chekeAge (age) {
    if(age > 18) {
        return true;
    } else {
        return confirm('А родители разрешили?')
    }
}

let age = prompt('Сколько Вам лет?', '18')

if(chekeAge(age)) {
    alert('Доступ получен')
} else {
    alert('Доступ закрыт')
}


function Cino (age) {
    if (chekeAge(!age)) {
        return;
    }
    alert('Вам показывается кино')
}