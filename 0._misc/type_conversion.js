// type coercion/conversion lecture
const total = 3.32;
const price = 12;

const sum = total + price;

console.log(total, price); // brug komma til at få printet flere variablier - ikke plus som i Java! (god stil)

const balanceEquals = sum === total
console.log(balanceEquals); // husk at bruge 3 '=', for strict equality-check (!== er også ok)

const cat = {
    key: "value",
    name: "Tom"
}

console.log(cat.name); // dot-notation (bruge denne)
console.log(cat["name"]); // square-bracket-notation