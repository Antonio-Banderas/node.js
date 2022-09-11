
// const express = require("express"); // importering af bibliotek
//const app = express(); // instantiering af vores bibliotek
const app = require("express")(); // inline instantiering

// route          // callback function
app.get("/", (request, respone) => {
    respone.send({message: "hello world."});
});
        // endpoint
app.get("/deers", (req, res) => {
    res.send({ size: "BIG"});
});

app.get("/deers/:id", (req, res) => {
    if (Number(req.params.id) === "1") { // aldrig brug 2 ==. brug 3 ===.
        res.send({message:"thats bambi"});
    } else {
        res.send({message:"this is someone else"})
    }
});

app.get("/actors", (req,res) => {
    res.send({
        message:"information about the actor",
        //info: req.query
        ...req.query
    });
})


app.get("/cups", (req, res) => {
    res.send({ 
        colour: "red",
        brand: "royal"
    });
});


// app.listen(8080) 
// callback function to validate the server is running
app.listen(8080, () => {
    console.log("Server is runnning on port",8080);
});