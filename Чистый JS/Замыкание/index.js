
function createCalk (n) {
    return function() {
       console.log(1000 * n) 
    }
}

const calk = createCalk(43)
console.log(calk)

calk()

function creacCalcFn (a) {
    return function (num) {
        return a + num
    }
}

const addOne = creacCalcFn(1)
const addTen = creacCalcFn(10)

console.log(addOne(42))
console.log(addOne(10))

console.log(addTen(42))
console.log(addTen(10))

function urlGeneration (domain) {
    return function(url) {
        return `https://${url}.${domain}`
    }
}

const comUrl = urlGeneration('com')
const ruUrl = urlGeneration('ru')

console.log(comUrl('google'))
console.log(comUrl('netflex'))

console.log(ruUrl('vkontacte'))



// Написать свою функцию bind

const person1 = {
    Name: 'Vladislav',
    age: 25,
    job: 'Frontend'
}

const person2 = {
    Name: 'Maru',
    age: 25,
    job: 'Backend'
}

function logPerson () {
    return function() {
        return(` Person : ${this.Name}, ${this.age}, ${this.job}`)
    }
}

const info = logPerson()
consle.log(info(person1))

//фуннкция Минина

function bind(context, fn) {
    return function(...args){
        fn.apply(context, args)
    }
}

function logPerson () {
    console.log(`person: ${this.name}, ${this.age}, ${this.job}`)
}

const person = {
    name: 'Vladislav',
    age: 25,
    job: 'Frontend'
}

const Person = {
    name: 'Maru',
    age: 25,
    job: 'Backend'
}

bind(person, logPerson)()
bind(Person, logPerson)()