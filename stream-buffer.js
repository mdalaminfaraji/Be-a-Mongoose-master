const http=require("http");
const fs = require('fs');
// creating a server using raw node.js

const server=http.createServer()

server.on('request', (req, res)=>{
        if(req.url==='/read-file' && req.method==="GET");
        const readableStream=fs.createReadStream(process.cwd() + '/texts/read.txt')
        readableStream.on('data', (buffer)=>{
                res.statusCode = 200;
                res.write(buffer);
        })

        readableStream.on('end', ()=>{
                res.statusCode = 200;
                res.end("hello............")
        })
        readableStream.on('error', (error)=>{
                console.log(error);
                res.statusCode = 500;
                res.end("hello............")
        })
        
})

server.listen(5000, ()=>{
        console.log("server is running");
})