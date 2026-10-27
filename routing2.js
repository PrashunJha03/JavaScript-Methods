const express = require('express')
const app = express()
app.get("/",(req,res) => {
    res.send(`<a href = "/Aboutus">About Us</a>`)
})

app.get("/Aboutus",(req,res) => {
    res.send(`<input type= "text" name = "text" value="Welcome"/>
        <button>Submit</button> <br><br>
        <a href = "/Contact">Contact Page</a>`)
})

app.get("/Contact",(req,res) => {
    res.send(`<a href="/">Back to Home</a>`)
})

app.listen(4000)
console.log("Server is running on Port 4000")