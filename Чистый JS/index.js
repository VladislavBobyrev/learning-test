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
