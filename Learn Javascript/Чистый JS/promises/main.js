const prom = new Promise((res, rej) =>{
    setTimeout(() => {
        res('foo')
    }, 3000)
})

prom.then((value) => {
    console.dir(value)
})
console.dir(prom)

const promis = new Promise((res, rej) => {
	res(() => console.log('hello Promises'))
	rej(() => console.log('err reject'))
}).then(value => {
	console.log(value)
})

console.log(promis)