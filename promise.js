const { rejects } = require("node:assert")
const { error } = require("node:console")
const { resolve } = require("node:dns")

let marks = 34
let res = new Promise((resolve,rejects) => {
    if (marks >= 35)
        resolve("Passed")
    else
        rejects("Failed")
})
res.then(message => console.log(message))
.catch(error => console.log(error))