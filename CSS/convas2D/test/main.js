const cnv = document.querySelector('canvas')
const ctx = cnv.getContext('2d')

let resize = () => {
    cnv.width = innerWidth
    cnv.height = innerHeight   
}
resize()
addEventListener('resize', resize)


const promisImg = new Promise((resolve) => {
        const img = new Image
        img.src = './img/bg.jpg'
        img.onload = () => resolve(img)
    })
const image = promisImg.then((data) => data)

async function drowGame() { 
    requestAnimationFrame(drowGame)   
    const img = await image 
    const patern = ctx.createPattern(img, 'repeat-x')
    ctx.fillStyle = patern
    ctx.fillRect(0, 0, cnv.width, cnv.height)
}
drowGame()


