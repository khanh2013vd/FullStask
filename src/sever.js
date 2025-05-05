// //Tạo địa chỉ localhost
// const { createServer } = require('node:http');

// const hostname = 'localhost';
// const port = 3000;
// //Render nội dung websitewebsite
// const server = createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World\n KHANH HOC FULLSTASK');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });


//import express from 'express';
const express = require('express') //import express
const path = require('path')
require('dotenv').config();

const app = express() // tạo express application

//const port = 3000  // init port  //port => hardcode . uat .prop
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config template
app.set('views', path.join(__dirname, 'views'))
//app.set('views', './views/');
app.set('view engine', 'ejs')

//config static files
app.use(express.static(path.join(__dirname, 'public')));

//khai báo routes
//req (request), res(response) là 2 object trong môi trường Node.js
app.get('/', (req, res) => {
    res.send('Hello World! test nodemon');
})

app.get('/abc', (req, res) => {
    res.send('ABC!');
})

app.get('/hoc', (req, res) => {
    //res.send('<h1>Hoc FullStask</h1>')
    res.render('sample.ejs');
    ;
})

//run server trên port đã khởi tạo trước đấy
//nạp các thông tin khai báo ở trên rồi chạy (ví dụ như nạp routes)
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
})
