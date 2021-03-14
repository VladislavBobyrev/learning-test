// split  разделит строку на массив по тому разделителю который мы укозали 
let userName = 'Vasua, Petya, Masha'

let arr = userName.split(', ')

for(let name of arr){
    console.log(`hello my name ${name}`)
}

let array = 'Vasua, Petya, Masha'.split(',', 2)
console.log(array)

let test = 'test'.split('') // split без аргументов разобьет строку на буквы
console.log(test)

// join обьедиянет массив в строку через разделитель
let arrM = ['Вася', 'Петя', 'Маша']
arrM.join(';')
console.log(arrM.join('; '))

// reduse
let num = [1, 2, 3, 4, 5]
console.log( num.reduce((sum, current) => sum + current, 0)) 

let noArr = []
//console.log( noArr.reduce((sum, current) => sum + current)) // пустой массив вызовет ошибку

let army = {
    minAge: 18,
    maxAge: 27,
    csnLJoin(user){
        return user.age >= this.minAge && user.age < this.maxAge
    },
}

let users = [
    {age: 16},
    {age: 20},
    {age: 23},
    {age: 30}
  ];

  let solilder = users.filter(army.csnLJoin, army)
  console.log(solilder[1])

  //push добавляет элемент в конец массива
  //pop извоекает  элемент с конца

  let camelize = (str) => {
      let arr = str.split('-')
      console.log(arr)
      console.log( arr.join(''))
     }

camelize("-webkit-transition")


let arrs = [5, 3, 8, 1]
let filterRand = (arr, a, b) => {
    let result = []
    for(let num of arr){
        num >= a && num < b ? result += num : ''
    } 

    return result   
}


console.log(filterRand(arrs, 1, 4))

//let filterRandPlase = (arr, a, b) => {
//    for(let i of arr){
//        let result = arr.filter(arr[i] > a && arr[i] < b)
//        console.log(result)
//    }
//}

//console.log(filterRandPlase(arrs, 2, 8 ))

//let sort = ["HTML", "JavaScript", "CSS"]
//let result = sort.concat()

//console.log(result)

let copuSort = (arr) => {
    return arr.slice(0, 4).sort()
}

let result = copuSort(arr)
console.log(result)

const numberSort = [1, 2, 3, 4, 5, 6, 7]

let sort = (arr) => {
    return arr.reverse()
}
let numS = sort(numberSort)
console.log(numS)

let str = '1 + 2'
let rashObj = (str) => {
    return str
}
rashObj(str)



//let vasya = { name: "Вася", age: 25 };
//let petya = { name: "Петя", age: 30 };
//let masha = { name: "Маша", age: 28 };

//let usersis = [ vasya, petya, masha ]

//let names = usersis.map(user => user.name)
//console.log(names)

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arrm = [ vasya, petya, masha ];
let getAverageAge = (users) => {
let old = users.map(person => person.age)
console.log(old.reduce(previev, item => item + previev))

}
getAverageAge(arrm)