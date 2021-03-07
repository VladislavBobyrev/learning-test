const { sreatServer } = require('http') // деструктурируем и принимаем в переменную обьект из рекваир
const { createServer } = require('node:http')

const { array } = require('./data') // передаем в рекваер модуль
const port = 6678

const server = createServer((_, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http')
    res.write(JSON.stringify(array))
    res.end()
})

server.listen(port)
console.log(`server is listening ${port} port..`)
