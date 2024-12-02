const http = require('node:http')

const sports = ['soccer', 'basketball', 'baseball', 'tennis']

const server = http.createServer(async (request, response) => {
    const { method, url } = request
    response.setHeader('Content-Type', 'application/json')

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

    if (method === 'GET' && url === '/api/sports') {
        response.write(JSON.stringify(sports))
        response.end()
        return
    }

    if (method === 'POST' && url === '/api/sports') {
        const bodyPromise = new Promise((resolve, reject) => {
            let body = ''
            request.on('data', chunk => {
                body += chunk
            })
            request.on('end', () => {
                try {
                    body = JSON.parse(body)
                    resolve(body)
                } catch (error) {
                    reject(`Invalid JSON: ${error}`)
                }
            })
            request.on('error', error => {
                reject(error)
            })
        })

        const { name } = await bodyPromise
        if (!name) {
            response.statusCode = 400
            response.end()
            return
        }
        sports.push(name)
        response.statusCode = 201
        response.end()
    }
})

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/api')
})
