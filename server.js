//without framework
const http = require('http');
const fs = require('fs')

const server = http.createServer((req,res)=> { //this callback function is going to run for every request
    console.log(req.url, req.method)

    //set headers
    res.setHeader('content-Type','text/plain')

    res.write('hello');
    res.write('write another');
    
    //send an html file
    /*fs.readFile('./views/index.html', (err,data) => {
        if(err){
            console.log(err)
            res.end()
        }
        else{
            res.write(data);
            res.end()
        }
    })*/


    res.end()
})
server.listen(3000, 'localhost',()=>{ //127.0.0.1
    console.log("listening for request on port 3000")
})  