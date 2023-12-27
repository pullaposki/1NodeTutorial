const path = require('path');

console.log(path.sep);

const filePath = path.join('/content///', 'sub-content', 'test.txt');

// Print a normalized file path
console.log(filePath);

// Print whole path
const absolute = path.resolve(__dirname, 'content', 'sub-content', 'test.txt');
console.log(absolute);