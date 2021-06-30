//variabl
const left = document.querySelector(".left")
const right = document.querySelector(".right")
const spiner = document.querySelector('.spiner')
let angle = 0
//func
const galeruspin = (e) => {
  e.target == left ? angle -= 45 : angle += 45 
	spiner.setAttribute('style', `transform: rotateY(${angle}deg)`)
}
// listener
right.addEventListener('click', galeruspin)
left.addEventListener('click', galeruspin)