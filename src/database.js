const mongoose = require("mongoose")
const URI = process.env.URI_DATABASE 

mongoose.connect(URI)

mongoose.connection.once("open", ()=> console.log("batabase connected..."))
mongoose.connection.on("error", error => console.log("we have a error: ", error))