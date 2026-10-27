const express = require('express')
const app = express()
const port = 3000
app.get("/home",(req,res) => {
    res.send("This is my HomePage")
})

app.get("/about",(req,res) => {
    res.send("This is my About ")
})

app.get("/contact",(req,res) => {
    res.send("This is my Contacts")
})

app.listen(port,() => {
    console.log(`server is running on http://localhost:${port}`)
})