import fs from 'fs'
import path from 'path'
import crypto from 'crypto'

const directory = path.join("/", "usr", "src", "app", "files")
const filePath = path.join(directory, 'output.txt')

const readFile = () => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) console.log(err)
        const hash = crypto.createHash("sha256").update(data).digest('hex')
        console.log(`${hash}: ${data}`)
    })
}

setInterval(readFile, 5000)