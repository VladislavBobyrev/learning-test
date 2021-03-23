const cnv = document.querySelector('canvas')
const ctx = cnv.getContext('2d')

console.log(ctx)

let resize = () => {
    cnv.width = innerWidth
    cnv.height = innerHeight   
}
resize()
addEventListener('resize', resize)

