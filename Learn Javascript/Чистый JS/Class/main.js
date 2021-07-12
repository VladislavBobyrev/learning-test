class Clock {

	constructor({ template }) {
		this.template = template
	}

	render() {
		let data = new Date()
		let hours = data.getHours()
		hours < 10 ? hours = '0' + hours : hours

		let mins = data.getMinutes()
		mins < 10 ? mins = '0' + mins : mins

		let secs = data.getSeconds()
		secs < 10 ? secs = '0' + secs : secs

		let output = this.template
			.replace('h', hours)
			.replace('m', mins)
			.replace('s', secs)

		console.log(output)
	}

	stop() {
		clearInterval(this.timer)
	}

	start() {
		this.render()
		this.timer = setInterval(() => this.render(), 1000)
	}
}

let clock = new Clock({template: 'h:m:s'})
clock.start()