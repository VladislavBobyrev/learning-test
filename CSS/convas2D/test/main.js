const cnv = document.querySelector('canvas')
const ctx = cnv.getContext('2d')

let resize = () => {
    cnv.width = 850
    cnv.height = 800   
}
resize()
addEventListener('resize', resize)


const fonImg = new Promise((resolve) => {
        const img = new Image
        img.src = './img/bg.jpg'
        img.onload = () => resolve(img)
    })
const image = fonImg.then((data) => data)

let  drowGame = async() => { 
    requestAnimationFrame(drowGame)   
    const img = await image 
    const patern = ctx.createPattern(img, 'no-repeat')
    ctx.fillStyle = patern
    ctx.fillRect(0, 0, cnv.width, cnv.height)
    goingCar()
}
drowGame()


const carImg = new Promise(resolve => {
    const img = new Image()
    img.src = './img/car.png'
    img.onload = () => resolve(img)
})
const imgCar = carImg.then(img => img)

let goingCar = async() => {
    const car = await imgCar
     let angelX =  
     let angelY = 
    ctx.drawImage(car, 160 + angelX, 430 + angelY)    
}
