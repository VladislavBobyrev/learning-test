//let arr =  ["I", "go", "home"]
//delete arr[1]
//console.log(arr.length)
//arr.splice(1, 1, 'runing')
//console.log(typeof !{})

////let remove = arr.splice(0, 2)
////console.log(remove)
//arr.splice(2, 0, 'learn JS to', 'I', 'I')
//console.log(arr)
//arr.splice(1, 0, 'am')
//console.log(arr)
//arr.forEach((item, index, array) => {
//    console.log(array)
//})

//console.log(arr.includes('I'))

//const unique = (arr) => {
//    let result = []
//   for(let i of arr){
//    //   if(!result.includes(i)){
//    //    result.push(i)
//    //   }
//       result.includes(i) ? result : result.push(i)
//   }
//    return result
//}
//console.log( unique(arr) )

//let map = new Map()
//console.log(map)
//map.set('1', 'tesla')
//console.log(map)

const obj = {
    name: 'valdislav',
    age: 26,
    job: 'webdev',
}
const entries = [
    ['name', 'valdislav'],
    ['age', '25'],
    ['job', 'frontend'],
]
console.log( Object.entries(obj))
console.log( Object.fromEntries(entries))

const map = new Map(entries)
console.log(map.get('job'))

map
.set(obj, 'Im your are key')
.set(NaN, 'Nan &&&')
console.log(map.size)

for(let [key, value] of map){
    console.log(key, value)
}
for(let value of map.values()){
    console.log(value)
}
for(let key of map.keys()){
    console.log(key)
}

const array = Array.from(map)
console.log(array)

const set = new Set([1, 2, 3, 4, 4, 5, 6, 6, 6, 6]) // у сета каждое значение уникально
console.log(set)

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
const showArr = (arr) => {
    const set = new Set(values)
    return console.log(set)
}
showArr(values)