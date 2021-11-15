const express =  require('express')

const app = express()

app.listen(3000)

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