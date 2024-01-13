const express = require('express')
const usersData = require('./users.json')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('express app')
})

app.get('/user', (req, res) => {
    res.json(usersData)
})

PORT = 3001
app.listen(PORT, () => {
    console.log(`server running is this port ${PORT}`)
})