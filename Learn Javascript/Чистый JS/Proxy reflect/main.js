let target = {}
// proxy ывпринимает обьект для которого нужно 
//сделать прокси и конфигурацию heandler
let proxy = new Proxy(target, {})

proxy.test = 5
proxy.tes = 2
console.log(target.test)

for (let key in proxy) {
	console.log(key)
}


let numbers = [1, 2, 3]

numbers = new Proxy(numbers, {
	get(target, prop) {
		if (prop in target) {
			return target[prop]
		} else {
			return 0
		}
	}
})

console.log(numbers[2])

// Reflect – встроенный объект, упрощающий создание прокси.

let user = {}

Reflect.set(user, 'name', 'vladislav')

console.log(user.name)


//let obj = {
//	data: 'важные данные'
//}

//let { proxy, revoke } = Proxy.revocable(obj, {})

//proxy.data

//revoke()
//console.log(proxy.data)