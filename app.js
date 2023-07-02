const os = require("os");

// info about current user
const userInfo = os.userInfo();

console.log(userInfo);

// checking system uptime

console.log(`System uptime is ${os.uptime()} seconds`);

const osInfo = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(osInfo);
