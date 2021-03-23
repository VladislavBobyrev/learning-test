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
