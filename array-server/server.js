const { createServer } = require('http')

const { array } = require('./data')

const port = 6678

const server = createServer((_, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5500')
  res.write(JSON.stringify(array))
  res.end()
})

server.listen(port)

console.log(`Server is listening ${port} port...`)
