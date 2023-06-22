const http = require("http");
const fs = require("fs");
function routing(req,res) {
    console.log(req.url);
    state = 200;
    let path = `./views/`;
    res.statusCode = 200;
    switch(req.url) {
        case "/" :
            path += `index.html`;
            break;
        case "/about": 
            path += `about.html`
            break;
        default:
            path += `404.html`;
            res.statusCode = 404;
            break;
    }
    return path;
} 

let server = http.createServer((req,res) => {
    res.setHeader('Content-type', 'text/html');
    let path = routing(req,res);
    fs.readFile(path,(err,data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    })

})

server.listen(3000, () => {
    console.log("server run");
})