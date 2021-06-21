let player = [ 'hello', 14, 98 ]
let [ nameing, x, y, t] = [ 'hello', , 98 ]

console.log(nameing)
console.log(x)
console.log(y)
console.log(t) // not existid


let a = 34;
let b = 9897;

[a, b] = [b, a]
console.log(b, a)


const { players, z, d,e} = { players:'Vladislav', z: 10, d: 99};
console.log(players , z, d, e)  // e not existid = undefined

let [age, width, ...rest] = [1, 1234, 2431 ,234, 24, 234, 4,34,43, 56, ,6767,76, 76]
console.log(rest)

const numb = [34, 5, 345, 4, 43, 5 ]
const lete = ['sdf', 'sdf', 'skfa', 'sfd']
const concat = [...numb, ...lete]
console.log(concat)

let obj = [ 'vlad', 25, 'js']

let [nameVL, ageVL, jobVL] = obj
console.log(ageVL)