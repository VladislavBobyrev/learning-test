const array = [1, 2, 5, 8, 5, 6, 7, 3, 9, 10, 15, 12, 13, 14, 12]

let lineralSearh = (array, item) => {
    for(let key of array){
        if(array[key] == item){
            return key
        }
    }  
    return null  
}
let result = lineralSearh(array, 12)
console.dir(result)