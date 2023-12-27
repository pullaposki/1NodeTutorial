const os = require('os');

const userI = os.userInfo();

console.log(userI); 

console.log(`The system uptime is ${os.uptime()} seconds.`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
};

console.log(currentOS);