const publicNames = require('./names');

// n Node.js, when you require a module, all the code in that module is executed. So, if there’s a function call in the module (like printResult() in your mind-grenade.js), it will be executed when the module is required.

// In your code, require('./mind-grenade.js'); is requiring the mind-grenade.js module. If mind-grenade.js contains a function call at the top level (not inside a function or conditional statement), that function will be executed immediately when the module is required.

// This behavior allows modules to run setup code, such as initializing data structures, registering event handlers, or anything else that needs to happen before the module’s functions can be used.

// So, the function in mind-grenade.js is being called because it’s invoked at the top level in the mind-grenade.js module, and that module is being required in your current module.
require('./mind-grenade.js');

console.log(publicNames);
