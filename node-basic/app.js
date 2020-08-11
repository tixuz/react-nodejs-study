// // console.log("Hello from node-js");
// // console.log(process);
//
// //using destructor to import
// const { sum } = require('./helpers');
// const http = require("http")
//
// const server = http.createServer((req, res) => {
//     res.end("Hello new world from real node-js");
// });
//
// server.listen(3000);
//
//
//
// //var let const
// const total = sum(10,200);
// console.log("TOTAL: ", total);

// using express server
// const express = require('express')
// const app = express()
//
// app.get('/', function (req, res) {
//     res.send('Hey wussap with node js')
// })
//
// app.listen(3000)

const fs = require('fs');
const fileName = "target.txt";

// // fs.watch(fileName, () => {
// // fs.watch does not work properly fs.watch() doesn't notify content changes starting v10.16.0 #28882
// fs.watchFile(fileName, () => {
//     return console.log(`File changed`);
// })

// asynchronous
// fs.readFile(fileName, (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     return console.log(data.toString());
// })

// synchronous
const data = fs.readFileSync(fileName);
console.log(data.toString());


console.log("Node js asynch programming ... ?")