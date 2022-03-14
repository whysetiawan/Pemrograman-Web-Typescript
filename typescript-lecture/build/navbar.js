"use strict";
function genericType(args) {
    return {
        state: args,
    };
}
let $personFromFunc = genericType({
    firstName: "Sherlock",
    lastName: "Holmes",
    address: "221B Baker Street",
    type: 1,
});
let $carFromFunc = genericType({
    brand: "Toyota",
    type: 1,
    power: "100hp",
});
let $genericTypeString = genericType("Hello World");
$genericTypeString.state.toUpperCase();
console.log("generic type string", $genericTypeString.state);
console.log("generic type car", carFromFunc.state);
console.log("generic type of person", personFromFunc.state);
