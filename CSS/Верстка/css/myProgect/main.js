const btn = document.querySelector('.modal__close')

const closeum = () => {
	btn.classList.remove('modal')
}

btn.addEventListener('click', closeum)