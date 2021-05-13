const http = require('http')			// функция создания сервера
const host = 'localhost'					// хост который слушать
const port = '8000'								// порт

const listennerServ = (req, res) => {
	res.writeHead(200)
	res.end('My firist derver')
} 

const server = http.createServer(listennerServ)
server.listen(port, host, () => {
	console.log(`Sserver is runing of http//${host}:${port}`)
})
