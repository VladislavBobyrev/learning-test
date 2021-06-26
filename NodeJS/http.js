
const http = require('http')
const fs = require('fs')
const path = require('path')
const serv = http.createServer((req, res) => {
	
let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)

console.log(filePath)

fs.readFile(filePath, (err, content) => {
	if(err) {
		fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
			if(err) {
				res.writeHead(500)
				res.end('Error')
			} else {
				res.writeHead(200, {
					'Content-type': 'text/html'
				})
				res.end(data)
			}
		})
	}else{
		res.writeHead(200, {
			'Content-type': 'text/html'
		})
		res.end(content)
	}
})

})


const adres = 'localhost:'
const host = 8081
serv.listen(host, () => {
	console.log(`	hosts${adres}${host}
	Server is runing...`)

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
})

