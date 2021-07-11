let user = {
	name: 'Vladislav',
	sureName: 'Bobyrev',

	get fullneme() {
		return ` ${this.name} ${this.sureName}`
	},

	set fullneme(value) {	
		[ this.name, this.sureName] = value.split(' ')
	}
}

user.fullneme = 'Mary Bobyreva'
console.log( user.fullneme)


function User (name, birtsday) {
	this.name = name
	this.birtsday = birtsday

	Object.defineProperty(this, 'age', {
		get() {
			let todayYera = new Data().getFullYear()
			return todayYera - this.birtsday.getFullYear()
		}
	})
}

let Vladislav = new User('Vladislav', new Data(1995,9,1))

console.log(Vladislav.birtsday)