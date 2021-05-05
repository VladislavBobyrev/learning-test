class MenuCard {
	// кончтруктор примимает в себя путь картинки фльт титулное название описание цену
	constructor(src, alt, title, description, price) {
		this.src = src
		this.alt = alt
		this.title = title
		this.description = description
		this.price = price
		this.transfer = this.transfer		// значение доллара с сервера
		this.chandeToDollar()						// вызываем метод каторый переводит рубли в доллары
	}

	chandeToDollar() {
		this.prise = this.price * this.transfer
	}

	render() {	
		const element = document.createElement('div')
		element.innerHTML = `
		<div class="meny_item">
		<img src="" alt="" srcset="">
		<h3></h3>
		<div class="meny_description"></div>
		<div class="meny_deviver"></div>
		<div class="meny_price">
			<div class="meny_price__cost"></div>
			<div class="meny_price__total"></div>			
		</div>		
	</div>
		`
	}
}