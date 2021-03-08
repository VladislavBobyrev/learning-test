const { createServer } = require('http')

const { array } = require('./data')
const port = 6687

const server = createServer((_, res) => {
    res.setHeader('Acces-Control-Allow-Origin', 'http://localhost:5500')
    res.write(JSON.stringify(array))
    res.end()
})

server.listen(port)
console.log('Node server working...')