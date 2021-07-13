function carru (f) {
	return function(a) {
		return function(b) {
			return f(a + b)
		}
	}
}

const sum = (a, b) => a + b

let carriedSum = carru(sum)

console.log( carriedSum(10)(34))