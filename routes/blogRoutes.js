
const express = require('express')
const Blog = require('../models/blog') //get blog model
const router = express.Router();


/**
 * a very big note is that you should be intuitive about how 
 * you structure your code
 * i.e the routes. remember that the code runs from top to bottom
 * 
 */

router.get('/s', (req,res)=> {
    Blog.find().sort({createdAt:-1})
    .then((results) => {
        res.send(results)
    })
    .catch((err)=> {
        console.log(err)
    })
})

router.post('/', (req, res) => {
    const blog = new Blog(req.body) //creates a new blog instance with all data
    
    blog.save()
    .then((results)=> {
        //do something else with success 
    })
    .catch((err) => {
        console.log(err)
    })
})

router.get('/:id', (req,res)=>{
    const id = req.params.id 
    Blog.findById(id)
    .then(results => {
        //do something with results
    })
    .catch(err => {
        console.log(err)
    })
})

router.delete('/:id', (req,res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete()
    .then(results => {
        //do something
        res.json() //send json data
    })
    .catch(err => {

    })
})

module.exports = router;