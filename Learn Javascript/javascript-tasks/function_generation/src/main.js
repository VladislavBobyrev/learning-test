//============================ function generation
function* generation(n) {
	for (let i = 0; i < n; i++) {
		yield i
	}
}

const counter = generation(7)

console.log(counter.next())
 
console.log(counter.throw())