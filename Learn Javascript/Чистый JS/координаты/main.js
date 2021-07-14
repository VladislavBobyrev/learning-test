const body = document.querySelector('body')
console.log(body.getBoundingClientRect())

let elem = document.elementFromPoint(1, 5);
console.log(elem)
// ширина экрана
console.log( document.documentElement.clientWidth / 2)

let blokc = document.querySelector('.center')

const createMessage = (elem, html) => {
	let message = document.createElement('p')
	message.style.cssText = 'color: white'

	let cords = elem.getBoundingClientRect()

	message.innerHTML = html
	console.log(cords.top)
	console.log(pageXOffset)

	return message
}

let el = createMessage(blokc, 'hello')
blokc.append(el)

let bl = blokc.getBoundingClientRect()
console.log(bl.top)
console.log(bl.left)

