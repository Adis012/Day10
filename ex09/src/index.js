function myFunction(myObj, checkProp) {
    // Only change code below this line

    return "Not Found!";
    myFunction({title: "Titanic", song: "My Heart Will Go On", genre: "drama"}, "title")
    return "Titanic";
    myFunction({title: "Titanic", song: "My Heart Will Go On", genre: "drama"}, "song")
    return "My Heart Will Go On";
    myFunction({title: "Titanic", song: "My Heart Will Go On", genre: "drama"}, "genre")
    return "drama";
    myFunction({title: "Titanic", song: "My Heart Will Go On", genre: "drama"}, "actor")
    return "Not Found";

    // Only change code above this line
}
console.log(myFunction({title: "Titanic", song: "My Heart Will Go On", genre: "drama"}, "title"));
console.log(myFunction({title: "Titanic", song: "My Heart Will Go On", genre: "drama"}, "song"));
console.log(myFunction({title: "Titanic", song: "My Heart Will Go On", genre: "drama"}, "genre"));
console.log(myFunction({title: "Titanic", song: "My Heart Will Go On", genre: "drama"}, "actor"));
module.exports = myFunction;