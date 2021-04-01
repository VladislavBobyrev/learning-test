//let body = document.querySelector('.page')
//let themeButton = document.querySelector('.theme-button')


//let smena = () => body.classList.toggle('light-theme') & body.classList.toggle('dark-theme')

//themeButton.addEventListener('click', smena)

const body = document.querySelector('.page')
const themeButton = document.querySelector('.theme-button')

const changeTheme = () => body.classList.toggle('light-theme') & body.classList.toggle('dark-theme')
themeButton.addEventListener('click', changeTheme)

const textInput = document.querySelector('.text')
const buttonGo = document.querySelector('.go')

let func = () => {
    console.dir(textInput.value)
    textInput.value = ''
}

buttonGo.addEventListener('click', func)