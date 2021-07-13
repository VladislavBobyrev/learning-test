const body = document.querySelector('body')
const div = document.querySelector('.one')

console.log(body.parentNode === document.documentElement)

console.log(body.previousSibling)
console.log(div.nextSibling)

//сломает скрипт
//while(elem = body.parentNode){
//	console.log(elem)
//}

for(let elem of body.children){
	console.log(elem)
}