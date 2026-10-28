const readlineSync = require('readline-Sync')

const marks = readlineSync.questionInt('Enter Your Marks : ')

console.log ("Your Marks is : " + marks)
if(marks >= 35)
    console.log("Passed")
else
    console.log("Failed")
