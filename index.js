const http = require('http')
const port = 4000

const requestHandler = (request, response) => {
    console.log(request.url)
    response.end('Hello node.js server')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
    err ? console.log(err) : console.log(`Server is listening on ${port}`)
})