const EventEmmiter = require('events')
 
//const emmiter = new EventEmmiter()
//emmiter.on('anything', data => {
//	console.log('ON: enithing : ', data)
//})

//emmiter.emit('anything', {a:1})
//emmiter.emit('anything', {b:2})
//setTimeout(() => {
//	emmiter.emit('anything', {c:3})
//}, 1500)

class Dispath extends EventEmmiter {
	subscribe(eventName, cb){
		console.log('[Subscribe...]')
		this.on(eventName, cb)
	}

	dispath(eventName, data){
		console.log('[Dispathing...]')
		this.emit(eventName, data)
	}
}

const dis = new Dispath()


dis.subscribe('aa', data => console.log('one aa :',data) )
dis.dispath('aa', {aa: 22}) 