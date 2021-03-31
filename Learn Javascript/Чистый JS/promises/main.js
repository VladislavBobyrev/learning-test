const prom = new Promise((res, rej) =>{
    setTimeout(() => {
        res('foo')
    }, 3000)
})

prom.then((value) => {
    console.dir(value)
})
console.dir(prom)