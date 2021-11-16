const express =  require('express')

const app = express()

//connect to mongodb
const dbURL = 'mongodb+srv://primeAtlas:<password>@nodebackend1.omiaq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


app.listen(3000)

app.use((req,res, next) => {
    console.log("new request mande:")
    console.log(req.hostname)
    console.log(req.path)
    console.log(req.method)
    next()
})

app.use(express.static('folder')) //folder to make public

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