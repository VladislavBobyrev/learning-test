const slider = document.querySelector('span')
const img = document.querySelector('.slide')
let i = 0

const click = () => {
    console.dir('kk')
    i++
    for(i of slider){
        i == 0 ? i.style.left = '0px' :
        i == 1 ? i.style.left = '-740px' :
        i == 2 ? i.style.left = '-1480px' :
        i == 3 ? i.style.left = '-2220px' : i = 0
    }
}
slider.addEventListener('click', click)