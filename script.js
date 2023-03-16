const http = require('http')
const fs = require('fs')
const path = require('path')
const PORT = 3000; 
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')
    const createPath = (page) => path.resolve(__dirname, `${page}`)
    let dir = '';
    switch (req.url) {
        case '/':
        case '/main':
        case '/home':
        case '/index':
            dir = createPath('index.html')
            res.statusCode = 200
            break
        case '/page1':
            dir = createPath('page1.html')
            res.statusCode = 200
            break
        case '/page2':
            dir = createPath('page2.html')
            res.statusCode = 200
            break
        case '/bd':
            dir = createPath('db.json')
            res.statusCode = 200
            break
        default:
            res.statusCode = 301
            res.setHeader('Location', 'page2.html')
            res.end()
    }
    console.log(dir)
    fs.readFile(dir, 'utf8', (err, data) => {
        err ? console.error(err) : null 
        res.write(data)
        res.end
    })
    
})
server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`)
})
