const names = require("./first_module/names");
const sayHello = require("./utils");
const data = require("./alternate_flavour");

require("./mind_riddle");
// console.log(data);

// setInterval(() => {
//   console.log("Hello You");
// }, 1000);

sayHello(names.shardhay);
sayHello(names.vatshyayan);
