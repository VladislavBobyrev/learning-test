let user = {
	name: 'Vladislav',
	sureName: 'Bobyrev',

	get fullneme() {
		return ` ${this.name} ${this.sureName}`
	}
}
console.log( user.fullneme)