
const http = require('http')
const fs = require('fs')
const path = require('path')
const serv = http.createServer((req, res) => {

	//if(req.url === '/'	){
	//	fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
	//		err === false ? () => {
	//			throw err
	//		} : 	response.writeHead(200, {
	//			'Content-type': 'text/html'
	//		})
	//		response.end(data)
	//	})
	//} else	if(req.url === '/contact'	){
	//	fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
	//		err === false ? () => {
	//			throw err
	//		} : () => {	response.writeHead(200, {
	//			'Content-type': 'text/html'
	//		})}
	//		response.end(data)
	//	})
	//}
	
let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)

console.log(filePath)
fs.readFile(filePath, (err, data) => {
	if(err)
})
res.end()
})


const adres = 'localhost:'
const host = 8081
serv.listen(host, () => {
	console.log(`	hosts${adres}${host}
	Server is runing...`)
})

