var myPet = {
    species: "Pitbull",
    name: "Rex",
    legs: 3,
    friends: ["Dona", "Rino"]
}
function myFunction(myObj) {
    return myObj;
}
console.log(myFunction(myPet));
module.exports = { myPet, myFunction };
