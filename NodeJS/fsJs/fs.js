const path = require('path')
// const up = () => console.log(path.join(__dirname, 'server'))
// module.exports = up

const fs = require('fs')
// сщздает новую папку joinом превразаем в строку путь и название новой папки а mldir создает ее спомощю ls module
//fs.mkdir(path.join(__dirname, 'test'),(err) => {
//if(err) {
//	throw err
//}
//console.log(`folder compleet ))`)
//})

const filePath = path.join(__dirname, 'test.txt')
// сщздает файл и перетерает 
//fs.writeFile(filePath, 'Hello writeFile', err => {
//	err ? () => {
//		throw err
//	} : console.log('file compleet')
//})
// обновляет файл и дабавляет новый контент
fs.appendFile(filePath, 'Hello appendFile', err => {
	err ? () => {
		throw err
	} : console.log('file compleet')
})