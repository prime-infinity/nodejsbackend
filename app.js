const express =  require('express')
const mongoose =  require('mongoose')
const blogRoutes = require('./routes/blogRoutes')

const app = express()
app.use(express.urlencoded({extended:true })) //might not needed, parse to json


//connect to mongodb
const dbURL = 'mongodbaccessurl'
/**
 * the details above should be replaced with the appro from mongo
 */
mongoose.connect(dbURL, { useNewUrlParser:true, useUnifiedTopology:true })
.then((res) => {
    console.log("connected")
    app.listen(3000)
})
.catch((err) =>  {
    console.log(err)
})

//blog routes
app.use('blogs',blogRoutes) //url scoping

/*app.get('/add-blog',(req, res)=>{
    const blog = new Blog({ //this creates a new instance of the blog object, just like in laravel
        title:'new blog2',
        snippet:'about my new blog',
        body:'more about my new blog'
    });

    blog.save() //save this new instance of the blog
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    })
})*/

/*app.use((req,res, next) => {
    console.log("new request mande:")
    console.log(req.hostname)
    console.log(req.path)
    console.log(req.method)
    next()
})

app.use(express.static('folder'))*/ //folder to make public

app.get('/', (req,res) => {
    res.send("home")
    //res.sendFile('./views/index.html',{ root: __dirname })
});

app.get('/about', (req,res) => {
    res.send("about")
});

//404 page
app.use((req,res) => { //this opsition is important
    //res.status(404).sendFile('./views/404.html', {root:__dirname})
})