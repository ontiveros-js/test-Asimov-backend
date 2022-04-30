const express = require("express")
const app = express()
const cors = require("cors")

//SETTING
app.set("port", process.env.PORT || 3001)

//MIDLEWARE

app.use(cors())
app.use(express.json())

const corsOptions ={
    origin:'https://crud-mern-ontiveros.herokuapp.com', 
    credentials:true,
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

//ROUTERS
app.use("/api/users", require("./routers/users"))
app.use("/api/notes", require("./routers/notes"))

module.exports = app