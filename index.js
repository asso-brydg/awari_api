const express = require("express")
const app = express();

const port = 3000;

app.listen(port, () => console.log("server runing"));


app.get('/', (request, response) => {
    response.send("Good for now and go dev");
})