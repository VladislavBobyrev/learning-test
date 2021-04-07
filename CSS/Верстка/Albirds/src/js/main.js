const container = document.querySelector('.slider_container')
const track = document.querySelector('.slider_track')
const item = document.querySelector('.slide_item')
const frontBtn = document.querySelector('.btn_prev')
const nextBtn = document.querySelector('.btn_next')

let clikFront = () => {
    console.dir('front')
}
frontBtn.addEventListener('click', clikFront)

let clikNext = () => {
    console.dir('Next')
}
nextBtn.addEventListener('click', clikNext)

