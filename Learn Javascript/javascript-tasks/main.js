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