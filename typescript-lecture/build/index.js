"use strict";
function genericType2(args) {
    return {
        state: args,
    };
}
let personFromFunc = genericType2({
    firstName: "Sherlock",
    lastName: "Holmes",
    address: "221B Baker Street",
    type: 1,
});
let carFromFunc = genericType2({
    brand: "Toyota",
    type: 1,
    power: "100hp",
});
let genericType2String = genericType2("Hello World");
genericType2String.state.toUpperCase();
console.log("generic type string", genericType2String.state);
console.log("generic type car", carFromFunc.state);
console.log("generic type of person", personFromFunc.state);
