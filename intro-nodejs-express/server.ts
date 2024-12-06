import express from 'express'
import { config } from 'dotenv'
config()

const app = express()
const port = process.env.SERVER_PORT || 3001
const serverUrl = process.env.SERVER_URL || 'http://localhost'

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server listening on ${serverUrl}:${port}`)
})
