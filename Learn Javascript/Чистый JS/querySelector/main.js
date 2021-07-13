const divs =  document.querySelector('.divs') // 1

console.log(divs.nodeType)
console.log(document.body.constructor.name)

console.log(document.body instanceof EventTarget)

console.log(document.body)
console.dir(document.body)

document.body.myF =  {
	name: 'valdislav',
	tityl: 'imperator'
}

console.log(document.body.myF.tityl)
console.log(document.body.className)

console.log(divs.attributes)