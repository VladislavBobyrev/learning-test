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

const loadImg = new Promise((resolve) => {
    const bg = new Image()
    const car = new Image()
    bg.src = './img/bg.jpg'
    car.src = './img/car.png'
    car.onload = () => resolve(bg, car)
})

const image = loadImg.then(img => img)

let drowGame =  async () => {
    const img = await image
    const drawImade = ctx.createPattern(img, 'repeat')
    ctx.fillStyle = drawImade
    ctx.fillRect(0, 0, cnv.width, cnv.height)
}
drowGame()



