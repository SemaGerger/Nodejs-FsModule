//! 2. ders by Sadik Turan 

//* DOWNLOAD
//* 2.) Download nodejs. if I see to port on the Terminal we write the terminal this "node index.js"
//* 3.) I download library from Expresjs.com with this " npm i express@4.18.1" and BEFORE we get package.json file with terminal "npm init --yes" because program must know how to use library
//* 4.) I want easy way for changes and then l download "npm i nodemon" from terminal (note: if l write to terminal this "npm list -g" i can see node_modules)
//* 5.) I added nodemon (npm i nodemon -g) (note: before l added nodemon l was writing (npm index.js) 

//* request - response
//* Use FS MODULE.

var http = require("http"); 
var fs = require("fs");

var server= http.createServer((req, res)=> {

 if (req.url=="/") {
    fs.readFile("html/index.html", (err, html)=> { //it can be long to get files and that we use arrow func. First param is error,second html
    res.write(html);
    res.end();
    }); 
 } else if (req.url=="/products") { 
    fs.readFile("html/product.html", (err, html)=>{
    res.write(html);
    res.end();
    });
 } else {
    fs.readFile("404.html", (err,html)=>{
    res.write(html);
    res.end();
    })
 }
});

server.listen(3000,()=>{
    console.log("node.js server at port 3000")
});
