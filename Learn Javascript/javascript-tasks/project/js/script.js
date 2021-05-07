/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
	movies: [
		"Логан",
		"Лига справедливости",
		"Ла-ла лэнд",
		"Одержимость",
		"Скотт Пилигрим против..."
	]
};

const reclama = document.querySelectorAll('.promo__adv img')
const poster = document.querySelector('.promo__bg')
const gener = poster.querySelector('.promo__genre')
const moveList = document.querySelector('.promo__interactive-list')
const addForm = document.querySelector('form.add')
const addInput = addForm.querySelector('.adding__input')
const checkBox = addForm.querySelector('[type="checkBox"]')

const makeChanges = () => {
	gener.textContent = `Dramma`
	poster.style.backgroundImage = 'url("img/bg.jpg")'
}

makeChanges()

const deletReclam = (arr) => {
	arr.forEach(item => {
		item.remove()
	})
}

deletReclam(reclama)

const sortArray = (arr) => {
	arr.sort()
}
sortArray(movieDB.movies)

let createMoviList = (films, parent) => {
	parent.innerHTML = ''

	films.forEach((item, i) => {
		parent.innerHTML += `
		 <li class="promo__interactive-item">${i + 1}. ${item}
								<div class="delete"></div>
							</li>`
	})
}
createMoviList(movieDB.movies, moveList)


// при отправке формы
addForm.addEventListener('submit', (event) => {
	event.preventDefault()

	const newFIlm = addInput.value
	const favorit = checkBox.checked

	movieDB.movies.push(newFIlm)
	sortArray(movieDB.movies)
	createMoviList(movieDB.movies, moveList)
	addInput.value = ''
})