const express = require("express")
const app = express()
const path = require("path")

const port = 3001

app.set("view engine", "ejs")

app.set("views", path.join(__dirname, "/views/Homepage"))

app.get('/', (req,res)=>{
    res.render("index.ejs")
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})
