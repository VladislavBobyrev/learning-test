const cnv = document.querySelector('canvas')
const ctx = cnv.getContext('2d')
const box = 50
let reset = () => {
    cnv.width = innerWidth
    cnv.height = innerHeight   
}
reset()
addEventListener('resize', reset)

function loadFon(src) {
    return new Promise((reselve, reject) => {
        const img = new Image()
        img.src = src
        img.onload = () => reselve(img)
    })
}

async function drowGames() {    
    const image = await loadFon('./src/stars.gif')
    let patern = ctx.createPattern(image, 'repeat')
    ctx.fillStyle = patern
    ctx.fillRect(0, 0, cnv.width, cnv.height)
    
    requestAnimationFrame(drowGames)
    snakeDrow()
    drowEat()
   
}
drowGames()

let eatX = Math.random() * cnv.width
let eatY = Math.random() * cnv.height

let drowEat = () => {       
    ctx.beginPath()
    //ctx.arc(Math.random() * cnv.width, Math.random() * cnv.height, 20, 0, Math.PI * 2)
    ctx.arc(eatX, eatY, box / 2, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(245, 133, 5, 0.87)' 
    ctx.fill()
    newSection(snakeX, snakeY)
}

let snakeX = cnv.width / 2
let snakeY = cnv.height / 2
let seeX = snakeX + box / 2
let seeY = snakeY + box / 2

let snakeDrow = () => {   
    if(snakeX + box <= eatX  || eatX  >= snakeX + box &&  snakeY + box <= eatY  || eatY  >= snakeY + box){        
    } else {
        eatX = Math.random() * cnv.width
        eatY = Math.random() * cnv.height
        
    }
    addEventListener('keydown', going)
    ctx.beginPath()
    ctx.rect(
        snakeX,
        snakeY,
        box, 
        box, 
    )
    ctx.fillStyle = 'rgba(191, 12, 77, .9)' 
    ctx.fill()
    ctx.beginPath()
    ctx.fillStyle = 'rgba(19, 120, 77, .7 )'
    ctx.arc(seeX, seeY, 10, 0, Math.PI * 2)
    ctx.fill()
    
}


let going = (event) => {
    if(event.key === 'ArrowUp'){        
        snakeY -= box / 2 
        seeX = snakeX + box / 2
        seeY = snakeY
    } else if(event.key ==='ArrowDown'){
        snakeY += box / 2
        seeX = snakeX + box / 2
        seeY = snakeY + box      
    } else if(event.key === 'ArrowLeft'){
        snakeX -= box / 2
        seeX = snakeX 
        seeY = snakeY + box / 2
    } else if(event.key ==='ArrowRight'){
        snakeX += box / 2
        seeX = snakeX + box 
        seeY = snakeY + box / 2
    }

    if(snakeY < -box){
        snakeY = cnv.height
    } else if(snakeY > cnv.height){
        snakeY = 0
    }
    if(snakeX < -box) {
        snakeX = cnv.width
    } else if(snakeX > cnv.width){
        snakeX = 0
    }
}


