const app = require("express")(); 

const weapons = ["rifle","pistol","tank","mecha"]

app.get("/weapons", (req, res) => {
    res.send( {weapons:weapons});
});

app.get("/weapons/:id", (req, res) => {
    res.send(weapons[req.params.id])
});

app.listen(8080, () => {console.log("Server is runnning on port",8080);});