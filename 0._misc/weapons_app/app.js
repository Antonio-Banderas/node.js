const app = require("express")(); 

// pretend database
let weapons_database = [
    { id: 1, type: "rifle" },
    { id: 2, type: "tank" },
    { id: 3, type: "mecha" },
]
// --- ID-TRACKER --- //

let nextID = 4;

// --- GET --- //
app.get("/weapons", (req, res) => {
    res.send({weapons:weapons_database});
});

app.get("/weapons/:id", (req, res) => {
    const weapon = weapons_database.find(weapon => weapon.id === Number(req.params.id));
    res.send(weapon);
});

// --- POST --- // 
app.post("/weapons", (req, res) => {
    const weapon = req.body;
    weapon.id = nextID++;
    weapons_database.push(weapon);
    res.send({data: ""});
});

//--- PATCH --- //
app.patch("/weapons/:id", (req, res) => {
    const foundIndex = weapons_database.find(weapon => weapon.id === Number(req.params.id));
    const foundWeapon = weapons_database[foundIndex];


    if (foundIndex !== -1) {
        const weaponToUpdate = {...foundWeapon, ...req.body, id: Number(req.params.id)}; 
        res.send({data : foundWeapon})
        weapons_database[foundIndex] = weaponToUpdate;

    } else {
        res.status(404).send({data: undefined, message: `No weapons found by ID: ${index} `});
    }

});

// --- DELETE --- //
app.delete("/weapons/:id", (req, res) => {

    const index = weapons_database.findIndex(weapon => weapon.id === Number(req.params.id))
    const foundWeapon = weapons_database[index];

    if (index === -1) {
        res.status(404).send({data: undefined, message: `No weapons found by ID: ${index} `});
    } else {
        weapons_database.splice(index, 1 [0]);
        res.status(200).send({"Weapon deleted": foundWeapon});
    } 


});

app.listen(8080, () => {console.log("Server is runnning on port",8080);});