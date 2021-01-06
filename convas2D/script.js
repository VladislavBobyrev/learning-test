const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const POINT_LIFETIME = 1000



const resize = () => {
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight
}

resize()

window.addEventListener('resize', resize)

// Data

let points = []
let index = 0

const colors = [
    '0, 250, 250',
    '10, 270, 70',
    '0, 100, 100',
    '48, 48 , 0',
]




const addPoint = event => {
    if (++index > colors.length - 1) {
        index = 0
    }

    points.push({
        x: event.offsetX,
        y: event.offsetY,
        color: colors[index],
        createdAt: Date.now(),
        deleteLater: false,
    })
}

canvas.addEventListener('click', addPoint)


// Painting
const drawPoint = (point, time) => {
    const passedTime = time - point.createdAt
    const part = Math.min(1, passedTime / POINT_LIFETIME)

    if (part == 1) {
        point.deleteLater = true
       
        return
    }

    // Size
    const startSize = 100
    const finishSize = 300

    const size = startSize - ((startSize - finishSize) * part)
    //  line Width

    const startWidth = 100
    const finishWidth = 0

    ctx.lineWidth = startWidth - ((startWidth - finishWidth) * part)

    //  color    
    ctx.strokeStyle = `rgba(${point.color}, ${1 - part}) `

    //painting
    ctx.beginPath()
    ctx.arc(point.x, point.y, size, 0, Math.PI * 2)
    ctx.stroke()

}
const draw = () => {
    requestAnimationFrame(draw)
    
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const now = Date.now()

    points = points.filter( p => !p.deleteLater)

    points.forEach(p => drawPoint(p, now))
}
draw()