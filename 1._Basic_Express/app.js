const express = require("express"); // importering af bibliotek
const app = express(); // instantiering af vores bibliotek

app.get("/test", (request, respone) => {
    respone.send({message: "hello world."});
});

app.listen(8080);