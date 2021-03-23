const cnv = document.querySelector('canvas')
const ctx = cnv.getContext('2d')

let resize = () => {
    cnv.width = innerWidth
    cnv.height = innerHeight   
}
resize()
addEventListener('resize', resize)
let drowGame = () => {
    
}


const bg = new Image()
const car = new Image()

bg.src = './img/bg.jpg'
car.src = './img/car.png'



