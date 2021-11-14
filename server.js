//without framework
const http = require('http');
const fs = require('fs');
const path = require('path/posix');

const server = http.createServer((req,res)=> { //this callback function is going to run for every request
    console.log(req.url, req.method)

    //set headers
    res.setHeader('content-Type','text/plain')

    //routing
    switch(req.url){
        case '/':
            //send index data
            //res.statusCode = 200;
            break;
        case '/about':
            //send about data
            //res.statusCode = 200;
            break;
        case 'about-me': //redirecting
            /*res.statusCode = 301;
            res.setHeader('Location','/about')
            res.end()*/
            break;
        default:
            //send default data
            //res.statusCode = 400;
            break;
    }

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