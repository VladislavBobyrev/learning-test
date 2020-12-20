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