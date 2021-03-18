const { createServer, request } = require('http')

//const { array } = require('./data')
const port = 3000

const requairHendler = (request, response) => {
    console.log(request.url)
    response.end(`Hello my one Nade.js Server ! ${request.url}`)
}
const server = http.createServer(requairHendler)

server.listen(port, (err) => {
    err ? console.log(`sometaimsing bad happend`, err) :
    console.log(`Server is listening port ${port}`)
})