let body = document.querySelector('.page')
let themeButton = document.querySelector('.theme-button')


let smena = () => body.classList.toggle('light-theme') & body.classList.toggle('dark-theme')

themeButton.addEventListener('click', smena)