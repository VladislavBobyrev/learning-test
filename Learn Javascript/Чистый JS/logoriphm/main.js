const array = [1, 2, 5, 8, 5, 6, 7, 3, 9, 10, 15, 12, 13, 14, 12]

let count = 0
let lineralSearh = (array, item) => {
    for(let key = 0; key < array.length; key++){
        count += 1
        if(array[key] == item){
            return key           
        }
    }  
    return null  
}

console.dir(`Nomber El :  ${lineralSearh(array, 3)}`)
console.dir(`amount itteratibl : ${count}`)


// function statment

function a(num) { // name a have one parametr num
    return num * num // return parametr func myltiply on yourself
}

// function expressin
const factorial = function fact(n){
    return n < 2 ? 1 : n * fact(n -1)
}
console.dir(factorial(5))


console.dir(aquair(5)) // hoisting allow up function only in expression

function aquair(n){ // expression
    return n * n
}

//const aquair = (n) => n * n // error function not initialization


// rekursia
const factor = (n) => {
    return n == 0 ?? n == 1 ? 1 : n * factor(n -1)
}
console.dir(factor(5))

let b, c, d


b = factor(2)
c = factor(3)
d = factor(5)


//function scoup
let q, o  // this variable global

const fn = () => { // funciton  global scoup
    const a = 0 // htis variable local

    const fn2 = () => { // function local scoup
        q + b       // b global  a local
    }
}

let loop = (node) => {
if(node < 0) return
    console.dir(`begin : ${node}`)
    loop(node -1)
    console.dir(`end : ${node}`)
}
loop(3)
//begin : 3
//begin : 0
//begin : 1
//begin : 2
//end : 0
//end : 1
//end : 2
//end : 3

// clousure 

const addzn = (a, b) => {
    const zn = (x) =>  x * x 
    return zn(a) + zn(b)    
}
console.dir(addzn(2, 2))

const outside = (m) => {
    const inside = (n) => {
         return m + n
    }
    return inside
}
const ins = outside(3)
console.dir( ins(5))
//outside(3)(5)  one in one

