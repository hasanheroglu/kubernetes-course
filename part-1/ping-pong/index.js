import express from 'express';
import 'dotenv/config'

const app = express()
const port = process.env.PORT 

let counter = 0

app.get('/pingpong', (req, res) => {
    res.send(`pong ${counter++}`)
})

app.listen(port, () => {
    console.log(`Server started in port ${port}`)
})