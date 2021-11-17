const express =  require('express')
const mongoose =  require('mongoose')
const Blog = require('./models/blog') //get blog model

const app = express()

//connect to mongodb
const dbURL = 'mongodb+srv://prime:eOxVqIvXaRhIQ9kV@nodebackend1.omiaq.mongodb.net/database1?retryWrites=true&w=majority'
mongoose.connect(dbURL, { useNewUrlParser:true, useUnifiedTopology:true })
.then((res) => {
    console.log("connected")
    app.listen(3000)
})
.catch((err) =>  {
    console.log(err)
})

//mongoose and mongo sandbox routes
app.get('/add-blog',(req, res)=>{
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
})

app.get('/all-blogs', (req,res)=> {
    Blog.find().sort({createdAt:-1})
    .then((results) => {
        res.send(results)
    })
    .catch((err)=> {
        console.log(err)
    })
})

app.get('/single-blog', (req, res) => {
    Blog.findById('idstringofblog')
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    })
})

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