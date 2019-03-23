// Stores CLI Input
var userInput = process.argv;
// Stores term Show or Actor
var searchTerm = userInput[2];
// Checks if Actor or Show was inputed
if (searchTerm === "Actor") {
  console.log("Actor!");
}

// Stores Search Terms into 1 string
var query = "";
for (var i = 3; i < userInput.length; i++) {
  var query = query.concat(userInput[i], " ");
  console.log(query);
}
