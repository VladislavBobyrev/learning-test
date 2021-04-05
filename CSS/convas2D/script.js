const cnv = document.querySelector('canvas')
const ctx = cnv.getContext('2d')
ctx.save()

let size = () =>{
    cnv.width = innerWidth
    cnv.height = innerHeight
    console.dir(cnv.width)
}
size()
addEventListener('resize', size)

let drowClock = () => {
    let date = new Date
    let sec = date.getSeconds()
    let min = date.getMinutes()
    let hr = date.getHours()

    ctx.clearRect(0, 0, 150, 150)
    ctx.translate(cnv.width / 2, cnv.height / 2)
    ctx.scale(0.4, 0.4)
    ctx.rotate(-Math.PI / 2)

    ctx.strokeStyle = 'black'
    ctx.fillStyle = 'black'
    ctx.lineWidth = 8
    ctx.lineCap = 'round'
    
    ctx.save()
    ctx.beginPath()

    for(let i = 0; i < 12; i++){
        ctx.rotate(Math.PI / 6)
        ctx.moveTo(600, 0)
        ctx.lineTo(680, 0)
    }
    ctx.stroke()
    ctx.restore()
    ctx.save()

    ctx.rotate((Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec)
    ctx.lineWidth = 10
    ctx.beginPath()
    ctx.moveTo(- 20, 0)
    ctx.stroke()
}
drowClock()