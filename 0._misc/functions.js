
// hoisting. deklerationerne bliver hoistet. du kan ikke dette i Java
add(5, 20)

// gets hoisted
function add(a, b) {
    return a + b;
}

// anonym funktion efter equal sign
const addAnonymousFunction = function (a, b) {
    return a + b;
};

// arrow function (also anonymous)
const addArrowFunction = ((a, b) => {
    return a + b;
});

// implicit return (ulempen er hvis man har brug for flere statements)
const addArrowFunctionCompact = (a, b) => a + b;


// callback function
function generecActionExecutor(anyCallbackFunction, name){
    // execute some code ...
    return anyCallbackFunction(name);
}

const spitting = (name) => `${name} is spitting.`;

console.log(generecActionExecutor(spitting,"Amanda"))


const functionReference = add; // function reference
const functioneehhhh = add(); // function
