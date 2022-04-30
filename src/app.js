const express = require("express")
const app = express()
const cors = require("cors")

//SETTING
app.set("port", process.env.PORT || 3001)

//MIDLEWARE

app.use(cors())
app.use(express.json())

//ROUTERS
app.use("/api/users", require("./routers/users"))
app.use("/api/notes", require("./routers/notes"))

module.exports = app