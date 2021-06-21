// Node packages
const fs = require('fs')
// Local files
const mailUtilities = require('./mailUtilities')
// Program

const loadErrors = () => {
    try {
        const errors = fs.readFileSync('./errors.json')
        const dataJSON = errors.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const errorHandling = (e) => {
    let errorLog = e.toString()
    let errors = loadErrors()
    let date = Date.now()
    let errorJSON = {Date: date, Error: errorLog}
    errors.push(errorJSON)
    errors = JSON.stringify(errors)
    fs.writeFileSync('./errors.json', errors)
    return 1
}

module.exports = {
    loadErrors: loadErrors,
    errorHandling: errorHandling
}