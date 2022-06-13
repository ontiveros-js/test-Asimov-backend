const express = require("express");
const app = express();
const cors = require("cors");

//SETTING
app.set("port", process.env.PORT || 3001);

//MIDLEWARE

// const whiteList = ["https://ontiveros-js.github.io"]{origin: whiteList}
app.use(cors());
app.use(express.json());

//ROUTERS
app.use("/api/appointment", require("./routers/appointment"));

module.exports = app;
