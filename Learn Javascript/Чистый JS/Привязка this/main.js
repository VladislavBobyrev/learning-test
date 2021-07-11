// ===================== bind
let user = {
	firstName: 'Vasia',
	sayHi(){
		console.log(this.firstName)
	}
}

const fn = () => {
	console.log(this.firstName)
}

const bindFn = fn.bind(user)
bindFn()

let sayHi = user.sayHi.bind(user)
sayHi()

// ======================= task
function f() {
  alert( this ); // ?c
}

let user = {
  g: f.bind(null)
};

user.g();