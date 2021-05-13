class User {
	constructor(name, age) {
		this.name = name
		this._age = age
	}
	surname = 'Bobyrev'

	say = () => {
		console.log(`Your name ${this.name} ${this.surname}, age ${this._age}`)
	}

	get age() {
		return this._age
	}
set age(age) {
	typeof age == 'number' && age > 0 && age < 110 ? this._age = age :
	console.log('Недопустимое значение ')
}

}
const Vlad = new User('Vladislav', 25)

console.log(Vlad.age)
Vlad.age = 99
console.log(Vlad.age)