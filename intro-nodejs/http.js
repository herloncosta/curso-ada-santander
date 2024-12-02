const http = require('node:http')

const server = http.createServer((request, response) => {
    const { headers, method, url, statusCode } = request
    const sports = ['soccer', 'basketball', 'baseball', 'tennis']

    if (url === '/api') {
        const htmlResponse = `
        <div>
            <h1>Hello World</h1>
            <p>This is a simple Node.js server.</p>
        </div>
        `
        response.write(htmlResponse)
        response.end()
        return
    }

    if (url === '/api/sports') {
        response.write(JSON.stringify(sports))
        response.end()
        return
    }

    response.statusCode = 404
    response.end()
})

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/api')
})
