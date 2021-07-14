const body = document.querySelector('body')
const input = document.querySelector('input')

//console.log(body)
//const getCoord = (evt) => {
//	let	targe = evt.target
//	console.log(targe)
//}
//body.addEventListener('click', getCoord)

//input.addEventListener('click', (evt) => {
//	if(evt.target.dataset.counter != undefined) {
//		evt.target.value++
//	}
//})

document.addEventListener('click', function(event) {
	let id = event.target.dataset.toggleId;
	if (!id) return;``

	let elem = document.getElementById(id);

	elem.hidden = !elem.hidden;
});