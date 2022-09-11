const app = require("express")(); 

// pretend database
const weapons_database = [
    { id: 1, type: "rifle" },
    { id: 2, type: "tank" },
    { id: 3, type: "mecha" },
]

app.get("/weapons", (req, res) => {
    res.send({weapons:weapons_database});
});

app.get("/weapons/:id", (req, res) => {
    const weapon = weapons_database.find(weapon => weapon.id === Number(req.params.id))
    res.send(weapon)
});

app.listen(8080, () => {console.log("Server is runnning on port",8080);});