# Basic Error Handling for Servers using MERN

## Premise and Aim of the project
- This project will be released as an NPM package
- The aim would be to have a single code block added to your try and catch block to <br>
  track your errors be it from an API or a system error.
- The application would also send automated emails to the owner regarding such errors
- Crontab not required
- The end product will contain a dash-board that allows you to track your server errors.

## Current Progress
- Phase 1: Complete boilerplate backend ready

### Usage
```js
const errorHandler = require('./errorHandler')
let sendTo = "Email Here"


try {
    console.log(asjdal)
    //<!--More Code here>
} catch (e) {
    errorHandler.errorHandling(e)
    //<!--More Code Here-->
}
```

## Coming up:
- Frontend support for tracking
- Email Setup automation
