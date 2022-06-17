const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        fs.readFile('./index.html',(err,data)=>{
            res.write(data);
            return res.end();
        })
    }
    if(req.url==='/about'){
        fs.readFile('./about.html',(err,data)=>{
            res.write(data);
            return res.end();
        })
    }
    if(req.url ==='/contact'){
        fs.readFile('./contact.html',(err,data)=>{
            res.write(data);
            return res.end();
        })
    }
});
const port = process.env.Port || 3000;
server.listen(port);
console.log(`listening on port ${port}`);