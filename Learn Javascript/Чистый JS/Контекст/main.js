let data = {
    name: 'valadislav',
    go() {
        console.log(this.name)
    }
}

data.go()

let calcul = {

    read(){
        this.x = +prompt('zn1')
        this.y = +prompt('zn2')
    },
    sum(){
        return this.x + this.y
    },
    mul(){return this.x * this.y},
}
calcul.read()
calcul.mul()


let ladder = {
    step: 0,
    up() {
      this.step++;
      return this
    },
    down() {
      this.step--;
      return this
    },
    showStep: function() { // показывает текущую ступеньку
      alert( this.step );
      return this
    }
  };

function hello () {
    console.log('Hello',this)
}

const person = {
    name: 'Vladislav',
    age: 15,
    sayHello: hello,
    sayHelloWindiwd: hello.bind(document),
    logInfo: function(job, phone) {
        console.group(`${this.name} :info`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()

    }
}

const lena = {
    name: 'Lena',
    age: 12,

}

 const fnLena = person.logInfo.bind(lena,'frontend', '8-999-343-344-3')
 fnLena()
const fnLena = person.logInfo.call(lena,'frontend', '8-999-343-344-3')
fnLena

person.logInfo.apply(lena, ['frontend', '8-999-343-344-3'])

// ================

const array = [1,2,3,4,5]

 function MultBy(arr, n) {
     return arr.map(function (i) {
         return i * n
     })
 }

 console.log(MultBy(array, 50))


Array.prototype.MultBy = function(n) {
    return this.map( function(i) {
        return i * n
    })
}

console.log(array.MultBy(2))


let obj = { 
    tel: 890,
    name: 'alesha',

    get(){
    console.log(obj.name)
    },
}
obj.get()


let djo = { nik: 'djoni'}
let esla = { nik: 'tesla'}

function fnThis(){
    console.log(this.nik)
}

djo.f = fnThis
esla.f = fnThis

esla.f()
djo.f()

let objUser = {
    name: 'max',
    ni() {console.log(this.name)},
    hi() {console.log('hello')},
}

objUser.ni()

//(objUser.name ==='max' ? objUser.name : objUser.hi)()

let firstName = {
    first: 'Bobyrev',
    hi() {
            let arrow = () => console.log(this.first) // this не имеет значения до того момента пока не булет ввызван
            arrow()
            }
    }
 firstName.hi()

