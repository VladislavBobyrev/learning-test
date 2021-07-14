const body = document.querySelector('body')
console.log(body.getBoundingClientRect())

//let elem = document.elementFromPoint(x, y);
//console.log(elem)
// ширина экрана
console.log( document.documentElement.clientWidth / 2)

let blokc = document.querySelector('.center')

const createMessage = (elem, html) => {
	let message = document.createElement('p')
	message.style.cssText = 'color: white'

	let cords = elem.getBoundingClientRect()

	message.innerHTML = html
	console.log(cords)

	return message
}

let el = createMessage(blokc, 'hello')
blokc.append(el)