import express from "express";
const app = express();

import path from "path";

app.use(express.static("public")) // allows folder to be accesed. security feature.

// - GET - //
app.get("/", (request, respone) => {
    respone.sendFile(path.resolve("public/frontpage/frontpage.html"))
});

app.get("/battle", (request, respone) => {
    respone.sendFile(path.resolve("public/battle", "battle.html"))
});

app.get("/pokemon", (req, res) => {


    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => response.json())
    .then(result => res.send({ data: result}))
    });

  

app.get("/pokemon/:id", (request, respone) => {});
// - POST - //
app.post("/pokemon", (request, respone) => {});
// - PATCH - //
app.patch("/pokemon", (request, respone) => {});
// - DELETE - //
app.delete("/pokemon/:id", (request, respone) => {});



app.listen(8080, (error) => {
    console.log(error);
    console.log("Server is running on port", 8080);
})