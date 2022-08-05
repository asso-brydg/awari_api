const express = require("express");
//require("./src/database/connection");

const app = express();
app.use(express.json());
app.use(express.urlencoded());
//app.use(require("./src/routers/routes"))
// const port = 3000;


// app.listen(port, () => console.log("server runing"));