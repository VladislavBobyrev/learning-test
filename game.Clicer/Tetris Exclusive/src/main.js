const cnv = document.querySelector('canvas')
const ctx = cnv.getContext('2d')
const blockCnv = document.querySelector('.cnv')         // нахожу центральный грид блок
let box
let h
let w

let resize = () => {
  w = cnv.width = blockCnv.clientWidth                    // размер грид блока присваиваю канвас
  h = cnv.height = blockCnv.clientHeight
  box =Math.floor( h / 20)                                       // мин ширина клетки  
}
resize()
addEventListener('resize', resize)

let drowBorder = () => {
    for(let i = 0; i < h; i += box ){
        if(i < box * 11){
            ctx.beginPath()
            ctx.rect(
                i,
                box * 19,
                box,
                box,
            )  
        ctx.stroke()
            }
        if(i < box * 20){
            ctx.beginPath()
            ctx.rect(
            0,
            i ,
            box,
            box
        )
        ctx.stroke()
            ctx.beginPath()
            ctx.rect(
            box * 11,
            i ,
            box,
            box
        )
        ctx.stroke()
            }
    }
}  
drowBorder()

//let i = [
//    [0, 1, 0, 0], 
//    [0, 1, 0, 0], 
//    [0, 1, 0, 0], 
//    [0, 1, 0, 0], 
//]
//let j = [
//    [0, 1, 1, 0], 
//    [0, 0, 1, 0], 
//    [0, 0, 1, 0], 
//    [0, 0, 0, 0], 
//]
//let l = [
//    [0, 1, 0, 0], 
//    [0, 1, 0, 0], 
//    [0, 1, 1, 0], 
//    [0, 0, 0, 0], 
//]
//let i = [
//    [0, 1, 1, 0], 
//    [0, 0, 1, 1], 
//    [0, 0, 0, 0], 
//    [0, 0, 0, 0], 
//]
//let i = [
//    [0, 1, 1, 0], 
//    [1, 1, 0, 0], 
//    [0, 0, 0, 0], 
//    [0, 1, 0, 0], 
//]
//let i = [
//    [0, 1, 0, 0], 
//    [0, 1, 0, 0], 
//    [0, 1, 0, 0], 
//    [0, 1, 0, 0], 
//]
//let i = [
//    [0, 1, 0, 0], 
//    [0, 1, 0, 0], 
//    [0, 1, 0, 0], 
//    [0, 1, 0, 0], 
//]


