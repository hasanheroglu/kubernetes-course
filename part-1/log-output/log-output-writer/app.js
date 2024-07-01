import {v4 as uuidv4} from 'uuid';
import express from 'express';
import 'dotenv/config'
import fs from 'fs'
import path from 'path'

const app = express()
const port = process.env.PORT || 4000

const randomString = uuidv4()
const intervalInMs = 5000
const logOutput = () => {
    const output = `${Date()}: ${randomString}\n`
    const directory = path.join("/", "usr", "src", "app", "files")
    const filePath = path.join(directory, 'output.txt')

    fs.appendFile(filePath, output, (err) => {
        if (err) console.log(err)
    })
}

app.get('/', (req, res) => {
    res.send(`${Date()}: ${randomString}`)
})

app.listen(port, () => {
    logOutput()
    setInterval(logOutput, intervalInMs)
})

