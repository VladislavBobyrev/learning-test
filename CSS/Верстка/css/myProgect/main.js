const btnModal = document.querySelector('.modal')
const btn = document.querySelector('.show')
const btnClose = document.querySelector('.close')

const open = () => {
	btnModal.classList.add('a')
	btnModal.classList.remove('modal')
}
btn.addEventListener('click', open)

const closeum = () => {
	btnModal.classList.add('modal')
}

btnClose.addEventListener('click', closeum)

function User(name, id){
	this.name = name
	this.id = id
	this.human = true
	this.hello = function () {
		console.log(`${name} Welcome to page, your years is ${id} million old `)
	}
}


let Vlad = new User('Vlad drakul', 25)
console.dir(Vlad)
Vlad.hello()

const obj = {
	name: 'Vladislav Dracul',
	age: 29, 
	years: 2021,
	summ: () => {
		console.log(this.age - this.years)
		//context this = window or use strict to undefined
		//function a(){
		//	console.log(this)
		//}
		//a()
	}
}
obj.summ()

function SayName() {
	console.log(this)
	console.log(this.name)
}

const user = {
	name: 'Vlad dracul'
}

SayName.call(user)
SayName.apply(user)
