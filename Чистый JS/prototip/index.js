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