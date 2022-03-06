// путь до файла
console.log(__dirname)

// возвращает путь + имя файла и расширение
console.log(__filename)

console.log(process.argv)
console.log(`Path ${process.argv[0]} ......`)
const url = new URL('http://localhost:3000/person')
console.log(url.hostname)
console.log(url.host)
console.log(url.hash)
console.log(url.href)
console.log(url.pathname)