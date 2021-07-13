let a = 8
function f() {
	let a = 2

	eval( `console.log(${a} + 2)`)
}
f()

// eval устарел не использовать