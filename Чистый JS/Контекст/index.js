
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


