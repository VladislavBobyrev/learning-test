let mail = document.querySelector('.header__email')
let password = document.querySelector('.password')
let res = document.querySelector('.header__res');
let btn = document.querySelector('.submit');

let messageRegister = () => { 
    res.innerHTML = '';
    res.innerHTML = `Ваша почта ${mail.value} успешон зарегестрированна,  ваш пароль ${password.value} в надежных руках`
}

btn.addEventListener('click', messageRegister);