import {v4 as uuidv4} from 'uuid';
import express from 'express';
import 'dotenv/config'

const app = express()
const port = process.env.PORT || 4000

const randomString = uuidv4()
const intervalInMs = 5000
const logOutput = () => {
    console.log(`${Date()}: ${randomString}`)
}

app.get('/', (req, res) => {
    res.send(`${Date()}: ${randomString}`)
})

app.listen(port, () => {
    logOutput()
    setInterval(logOutput, intervalInMs)
})

