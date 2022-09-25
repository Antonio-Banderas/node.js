import express from "express";
const app = express();

import path from "path";
app.use(express.static("public")) 

// --- INDEX --- //
app.get("/", (request, respone) => {
    respone.sendFile(path.resolve("public/index.html"))
});

app.listen(8080, (error) => {
    console.log(error);
    console.log("Server is running on port", 8080);
})