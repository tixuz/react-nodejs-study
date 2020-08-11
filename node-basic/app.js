// console.log("Hello from node-js");
// console.log(process);

//using destructor to import
const { sum } = require('./helpers');
//var let const
const total = sum(10,200);
console.log("TOTAL: ", total);
