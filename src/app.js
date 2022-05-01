const express = require("express")
const app = express()
const cors = require("cors")

//SETTING
app.set("port", process.env.PORT || 3001)

//MIDLEWARE


const whiteList = ["https://ontiveros-js.github.io/crud-mern-ontiveros/", "ontiveros-js.github.io/crud-mern-ontiveros"]
app.use(cors({origin: whiteList}))
app.use(express.json())

//ROUTERS
app.use("/api/notes", require("./routers/notes"))

module.exports = app