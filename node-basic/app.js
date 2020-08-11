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


const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hey wussap with node js')
})

app.listen(3000)