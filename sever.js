//Tạo địa chỉ localhost
const { createServer } = require('node:http');

const hostname = 'localhost';
const port = 3000;
//Render nội dung websitewebsite
const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n KHANH HOC FULLSTASK');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
