let slow = (x) => {
	console.log(`called with ${x}`)
	return x
}

const changDecorator = (func) => {
	let cache = new Map()

	const f = (x) => {
		cache.has.x ? cache.get.x : () => {
			let result = func(x)

			cache.set(x, result)
			return result
		}
	}
	return f
}

slow = changDecorator(slow)

console.log(slow(1))
console.log(`cash : ${slow(1)}`)