//without framework
const http = require('http');

const server = http.createServer((req,res)=> { //this callback function is going to run for every request
    console.log("request made", req)
})
server.listen(3000, 'localhost',()=>{ //127.0.0.1
    console.log("listening for request on port 3000")
})