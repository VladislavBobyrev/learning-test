class MenuCard {
	constructor(src, alt, title, description, price, parentSelector) { // кончтруктор примимает в себя путь картинки фльт титулное название описание цену
		this.src = src
		this.alt = alt
		this.title = title
		this.description = description
		this.price = price
		this.parent = document.querySelector(parentSelector)
		this.transfer = 70		 					// значение доллара 
		this.chandeToDollar()						// вызываем метод каторый переводит рубли в доллары
	}

	chandeToDollar() {
		this.prise = this.price * this.transfer
	}

	render() {
		const element = document.createElement('div')
		element.innerHTML = `
			<div class="meny_item">
			<img src=${this.src} alt=${this.alt}>
			<h3>${this.title}</h3>
			<div class="meny_description">${this.description}</div>
			<div class="meny_deviver"></div>
			<div class="meny_price">
				<div class="meny_price__cost">${this.price}</div>
				<div class="meny_price__total">${this.transfer}</div>			
			</div>		
			</div>
		`;
		element.classList.add('wrapper')
		this.parent.append(element)
	}
}

new MenuCard(
	"./IMG_E3364.JPG",
	'Boss Mary',
	'Menu "FITNES"',
	'Lorem ipsum dolor sit lorem asjjfsl flks flks hdlkfh slkhf;lkshflkhsddf khsoidfh ks hd',
	9,
	'.root',
).render()

new MenuCard(
	"./IMG_3257.JPG",
	'Boss Snow',
	'What my eat',
	'Lorem ipsum dolor sit ',
	11,
	'.root',
).render()

let options = {
	name: 'Vlad',
	car: 'tesla',
	town: 'new york',
	adress: {
		yl: 'new',
		hous: 1,
	}
}

console.log(options)
for (key in options) {
	if (typeof options[key] === 'object') {
		for (let i in options[key]) {
			console.log(`Property ${i} have ${options[key][i]}`)
		}
	} else {
		console.log(`Property ${key} have ${options[key]}`)
	}
}

const arr = [1, 3, 5, 6, 7]
arr.forEach(function(item, i, arr){
	console.log(`item: ${item} i: ${i} arr: ${arr}`)
})

//spread operator
const q = {
	one: 1,
	two: 2,
}

const a = {...q}
console.log(a)

// Promises
const req = new Promise((resolve, reject) => {
	setTimeout(() => {
		const product = {
			name: 'Vladislav',
			age: 25, 
		}
		//resolve(product)
		reject()		// Errros обрабатывает
	}, 2000)
})

req.then(data => {
	data.modify = true
	return data
}).then(data => {
	console.log(data)
}).catch(() => {
	console.error('произошла ошибка')
}).finally(() => {
	console.log('finish')
})
//	+ promises в  том что его результат можно обрабатывать по цепочке

const test =  time => {
	return new Promise(resolve => {
		setTimeout(() => resolve(), time)
	})
}

//test(1000).then(() => console.log('1000 ms'))
//test(2000).then(() => console.log('2000 ms'))

//Promise.all([test(1000), test(2000)]).then(() => {
//		console.log('All')
//})

//Rase действует после выполнения первого скрипта
Promise.race([test(1000), test(2000)]).then(() => {
	console.log('Race')
})