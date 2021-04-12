// constant
const container = document.querySelector('.slider_container')
const track = document.querySelector('.slider_track')
const item = document.querySelector('.slide_item')
const frontBtn = document.querySelector('.btn_prev')
const nextBtn = document.querySelector('.btn_next')
const img = document.querySelector('.item_img')
let countImg = 0

// map img
const images = []
images.push('./src/img/Rectangle(10).png')
images.push('./src/img/Rectangle(11).png')
images.push('./src/img/Rectangle(9).png')
images.push('./src/img/Rectangle(8).png')

img.src = images.countImg
console.dir(img.src = images.countImg)

// function btn
let clikFront = () => { 
    --countImg
    img.src = images.countImg
   img.style.left = '0px';
}
frontBtn.addEventListener('click', clikFront)

let clikNext = () => {
    console.dir(`Next ${countImg}`)
    ++countImg
    img.src = images.countImg
}
nextBtn.addEventListener('click', clikNext)

