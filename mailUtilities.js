// Npm Modules
const mailer = require('nodemailer')
// Node modules
const fs = require('fs')
// Files
const CONSTANTS = require('./CONSTANTS.js')


// Program
const loadFiles = () => {
    try {
        let errorFile = fs.readFileSync('./errors.json')
        errorFile = errorFile.toString()
        return JSON.parse(errorFile)
    } catch (e) {
        return []
    }
}


const createMail = (sendTo) => {
    let mailString = "Your server has errors. Please check your code.\nThe log file is attached."
    let subject = "Error in server"
    let message = {
        from: "errorsupport@c4projects.com",
        to: sendTo,
        subject: subject,
        text: mailString,
        html: "<p>Your server has errors. Please check your code.<br>The log file is attached.</p>",
        attachments: [
            {
                filename: "errors.json",
                content: fs.createReadStream('./errors.json')
            }
        ],
        envelope: {
            from: 'Error Support <errorsupport@c4projects.com>',
            to: sendTo
        }
    };
    return message
}

const sendMail = (sendTo) => {
    let message = createMail(sendTo)
    let username = CONSTANTS.mailDetails.user
    let password = CONSTANTS.mailDetails.pass
    let transporter;
    transporter = mailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: username,
            pass: password
        }
    });
    transporter.verify(function(error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log("Server is ready to take our messages");
        }
    });
    return {message, transporter}
}

const mailUtilities = (sendTo) => {

}

module.exports = {
    sendMail,
    createMail,
    loadFiles
}