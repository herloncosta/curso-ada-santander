import express, { Request, Response } from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import path from 'node:path'
import { User } from './interfaces/user'
import { CreateUserDto } from './interfaces/createUserDto'
config()

const app = express()
const port = process.env.SERVER_PORT || 3001
const serverUrl = process.env.SERVER_URL || 'http://localhost'

const users: User[] = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@doe.com',
    },
    {
        id: 2,
        name: 'Jane Doe',
        email: 'jane@doe.com',
    },
]

app.use(express.json())
app.use(cors())

app.get('/home', (req: Request, res: Response) => {
    const homepagePath = path.join(__dirname, 'home.html')
    res.sendFile(homepagePath)
})

app.get('/users', (req: Request, res: Response) => {
    res.json(users)
})

app.post('/users', (req: Request, res: Response) => {
    const { name, email } = req.body as CreateUserDto
    if (!name || !email) {
        res.status(400).json({ message: 'Name and email are required' })
        return
    }
    users.push({ id: users.length + 1, name, email })
    res.status(201).json({ message: 'User created successfully' })
})

app.get('/users/:id', (req: Request, res: Response) => {
    const { id } = req.params
    const user = users.find(user => user.id === parseInt(id))
    if (!user) {
        res.status(404).json({ message: 'User not found' })
        return
    }
    res.json(user)
})

app.put('/users/:id', (req: Request, res: Response) => {
    const { id } = req.params
    const { name, email } = req.body as CreateUserDto
    if (!name || !email) {
        res.status(400).json({ message: 'Name and email are required' })
        return
    }
    const user = users.find(user => user.id === parseInt(id))
    if (!user) {
        res.status(404).json({ message: 'User not found' })
        return
    }
    user.name = name
    user.email = email
    res.json({ message: 'User updated successfully' })
})

app.delete('/users/:id', (req: Request, res: Response) => {
    const { id } = req.params
    const userIndex = users.findIndex(user => user.id === parseInt(id))
    if (userIndex === -1) {
        res.status(404).json({ message: 'User not found' })
        return
    }
    users.splice(userIndex, 1)
    res.json({ message: 'User deleted successfully' })
})

app.listen(port, () => {
    console.log(`Server listening on ${serverUrl}:${port}`)
})
