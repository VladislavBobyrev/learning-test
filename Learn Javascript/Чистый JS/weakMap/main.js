const weakMap = new WeakMap()
const obj = {}
weakMap.set(obj, 'this oba in weakMap')

console.log(weakMap)

//console.log( weakMap.set('test', 'snow')) вызовет ошибку тк ключь не обьект а текст

let jon = { name: 'jon', age: 25,}
let weak = new WeakMap()
weak.set(jon, 'jon this key and text this value')
jon = null
console.log( weak)
console.log( weak.get(25))
//weak.set(jon, 'Sekret Data...') // if jon dead secret data too


const visetUser = new WeakMap()

let countUser = (user) => {
    let count = visetUser.get(user) ?? 0 
    //visetUser.set(user, count +1)
    console.log(count)
}
countUser(jon)

let visitSet = new WeakSet()

let pete = {name: 'pete'}
let ivan = {name: 'ivan'}
let sergey = {name: 'sergey'}

visitSet.add(pete)
visitSet.add(ivan)

visitSet.add(pete)
console.log(visitSet)

console.log(visitSet.has(pete)) // заходил
console.log(visitSet.has(sergey)) // no

pete = null
console.log(visitSet) // структура будет очищена автоматически

// task
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
const readMessage = new WeakSet()

readMessage.add(messages[1])
readMessage.add(messages[2])
console.log(readMessage)

readMessage.add(messages[1]) // добавили еще раз но все равно внутри прочитанных 2 obj
console.log(readMessage)

console.log(`read massage 0 : ${readMessage.has(messages[0])}`)
