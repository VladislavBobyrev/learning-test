 const person = {
     name: ' Vladislav',
     age: 25,
     greet: function () {
         console.log('Greet')
     }
 }

const persson = new Object ( {
    name: 'Vladislav',
    age: 105,
    greet: function () {
        console.lo('Greet')
    }
})

Object.prototype.sayHello = function () {
    console.log('Hello')
}

//С помощью new Object  мы можем создавать свои методы в прототипфх

const lena = Object.create(person)
lena.name = 'Elena'


const str = new String('i am string')

// ==================Прототипы, наследование
let o = {}
console.log(o)

let arr = [1, 2, 3, 4]

console.log(arr.__proto__.__proto__)
//console.log(Array.prototype.toString)


// добавим свой метод к строкам
String.prototype.show = function() {
	console.log(this)
}

'boom'.show()

// заимствования 
let obj = {
	0: "Hello",
  1: "world!",
  length: 2,
}

obj.join = Array.prototype.join
console.log(obj.join)