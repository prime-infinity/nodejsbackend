const Blog = require('../models/blog') //get blog model

const blog_index = (req, res) => {
    Blog.find().sort({createdAt:-1})
    .then((results) => {
        res.send(results)
    })
    .catch((err)=> {
        console.log(err)
    })
}

const blog_details = (req, res) => {
    const id = req.params.id 
    Blog.findById(id)
    .then(results => {
        //do something with results
    })
    .catch(err => {
        console.log(err)
    })
}

const blog_create_post = (req,res) => {
    const blog = new Blog(req.body) //creates a new blog instance with all data
    
    blog.save()
    .then((results)=> {
        //do something else with success 
    })
    .catch((err) => {
        console.log(err)
    })
}

const blog_delete =  (req,res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete()
    .then(results => {
        //do something
        res.json() //send json data
    })
    .catch(err => {

    })
}

module.exports = {
    blog_index,
    blog_details,
    blog_create_post,
    blog_delete
}