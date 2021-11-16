const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type:String,
        required:true
    },
    snippet:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true
    }
}, {timestamps:true})

const Blog = mongoose.model('Blog', blogSchema) //the plural form of the name in the quotes is the name of collection

module.exports = Blog; //this is the actual blog model