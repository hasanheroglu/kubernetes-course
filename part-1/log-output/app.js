import {v4 as uuidv4} from 'uuid';

const randomString = uuidv4()
const intervalInMs = 5000
const logOutput = () => {
    console.log(`${Date()}: ${randomString}`)
}

logOutput()
setInterval(logOutput, intervalInMs)

