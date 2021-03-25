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