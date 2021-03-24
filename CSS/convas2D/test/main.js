const cnv = document.querySelector('canvas')
const ctx = cnv.getContext('2d')

let resize = () => {
    cnv.width = 850
    cnv.height = 660   
}
resize()
addEventListener('resize', resize)

let speed = 0
let xCar = 160
let yCar = 430

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
    goingFront()
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
    speed += .9

    ctx.drawImage(car,xCar +  Math.cos(speed - 0.3),yCar + Math.sin(speed))    
}
let move = (event) => {
    event.key == 'ArrowLeft' ? xCar -= 10 : 
    event.key == 'ArrowRight' ? xCar += 10 : 
    ''
}
addEventListener('keydown', move)


const carFront = new Promise(resolve => {
   const img = new Image()
   img.src = './img/bmw1.png' 
   img.onload = () => resolve(img)
})
let xCarFront = 310
let yCarFront = 200 

const front = carFront.then(img => img)

let goingFront = async() => {
    const carFront = await front
    yCarFront += 2
    xCarFront -= 0.9   
    ctx.beginPath()
    ctx.drawImage(carFront,xCarFront +  Math.cos(speed * 0), yCarFront + Math.sin(speed + .5))
    ctx.translate(0, 1)
 
}
