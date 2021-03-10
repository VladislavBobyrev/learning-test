let home = ['I', 'go', 'to', 'home']
console.log( home[1], home.length)

home.splice(2, 2, 'back', 'car') // удали начиная с 2 го элемента 2  эл и вставь back car
console.log(home)

let arr = [ 1, 2, 3, 4, 5]
let remove = arr.splice(0, 3)
console.log(remove)

arr.splice(4, 0, 'hello', 'we', 'number')
console.log(arr)

arr.splice(-1, 0, 'no')
console.log(arr)

console.log( home.slice( 2, 4))

console.log( arr.concat([6, 7], 8, 9))

let array = [1, 2]
let arrayLike = {
    0: -1, 
    1: 'tesla',
    [Symbol.isConcatSpreadable]: true,
    length: 2,
}

console.log(array.concat(arrayLike))


let text = ["Bilbo", "Gandalf", "Nazgul"]
text.forEach((item, index, array) => {
   console.log( `My name is ${item}  I,m ${index} my frends ${array}`)
})

let myIndexOf = [1, 2, false]
console.log(myIndexOf.indexOf(false))
console.log(myIndexOf.indexOf(0))
console.log(myIndexOf.indexOf(null))

//find  проверяет у каждого обьекта ид и возвращает первое истенное
let users = [
    {id: 1, name: 'vasua'},
    {id: 2, name: 'sua'},
    {id: 3, name: 'vsa'},
    {id: 4, name: 'vua'},
]

let user =users.find(item => item.id == 3)
console.log(user)

let somUser = users.filter((item) => item.id < 3)
console.log(somUser)

let result = text.map(item => item.length)
console.log(result)

let sorting = [1, 2, 15, 16]
console.log(sorting.sort( (a, b) => a - b)) //пока не понял что передаем 
 
console.log( sorting.reverse() )// обратный порядок



