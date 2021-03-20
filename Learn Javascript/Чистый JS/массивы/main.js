let arr =  ["I", "go", "home"]
delete arr[1]
console.log(arr.length)
arr.splice(1, 1, 'runing')
console.log(typeof !{})

//let remove = arr.splice(0, 2)
//console.log(remove)
arr.splice(2, 0, 'learn JS to')
console.log(arr)
arr.splice(1, 0, 'am')
console.log(arr)
arr.forEach((item, index, array) => {
    console.log(array)
})

console.log(arr.includes('I'))

const unique = (arr) => {
    let result
   
    arr.forEach((item)  => {
        console.log(item )
    })
    return result
}
unique(arr)