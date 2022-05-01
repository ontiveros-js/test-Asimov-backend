const express = require("express")
const app = express()
const cors = require("cors")

//SETTING
app.set("port", process.env.PORT || 3001)

//MIDLEWARE

const corsOptions = {

}
const whiteList = ["https://ontiveros-js.github.io/crud-mern-ontiveros"]
app.use(cors({origin: whiteList}))
app.use(express.json())

// const corsOptions ={
//     origin:'https://crud-mern-ontiveros.herokuapp.com:35510', 
//     credentials:true,
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));

//ROUTERS
app.use("/api/notes", require("./routers/notes"))

module.exports = app