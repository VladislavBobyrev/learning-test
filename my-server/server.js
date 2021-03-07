const { creatServer } = require('http') // деструктурируем и принимаем в переменную обьект из рекваир

const { array } = require('./data') // передаем в рекваер модуль
const port = 6678

const server = creatServer((_, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500/')
    res.write(JSON.stringify(array))
    res.end()
})

server.listen(port)
console.log(`server is listening ${port} port..`)
