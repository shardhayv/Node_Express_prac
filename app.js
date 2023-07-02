const names = require("./first_module/names");
const sayHello = require("./utils");
console.log(names);

// setInterval(() => {
//   console.log("Hello You");
// }, 1000);

sayHello(names.shardhay);
sayHello(names.vatshyayan);
