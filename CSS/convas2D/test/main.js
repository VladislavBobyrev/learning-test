const cnv = document.querySelector('canvas')
const ctx = cnv.getContext('2d')

console.log(ctx)

let resize = () => {
    cnv.width = innerWidth
    cnv.height = innerHeight   
}
resize()
addEventListener('resize', resize)

let angel = 0

let animation = (obj) => {
    const { clear, update, render} = obj
    let timeStamp = 0
    console.log(clear)
    console.log(update)
    console.log(render)
    requestAnimationFrame(animation)

}

animation({
     clear(){
        ctx.clearRect(0, 0, cnv.width, cnv.height)
     },
    update(){angel += 1 },
    render(){
        ctx.beginPath() 
        ctx.arc(
            cnv.width / 2 + 150 * Math.cos(angel),
            cnv.height / 2 + 150 * Math.sin(angel),
            5,
            0,
            Math.PI * 2,
            )
            ctx.fillStyle = 'white'
            ctx.fill()
            
    },
}
   
)
