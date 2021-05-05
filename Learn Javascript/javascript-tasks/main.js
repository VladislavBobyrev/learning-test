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
		this.parent.append(element)
	}
}

new MenuCard(
	"./index.html",
	'Boss Mary',
	'Menu "FITNES"',
	'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem aspernatur non unde porro nam neque quaerat doloribus, tempora totam quis suscipit ipsa itaque reprehenderit harum quos eos maiores culpa vero?',
	9,
	'.root',
).render()