
const express = require('express')
const blogController =  require('../controllers/blogController')

const router = express.Router();

/**
 * a very big note is that you should be intuitive about how 
 * you structure your code
 * i.e the routes. remember that the code runs from top to bottom
 * 
 */

router.get('/', blogController.blog_index) //controller injection

router.post('/', blogController.blog_create_post)

router.get('/:id', blogController.blog_details)

router.delete('/:id', blogControlle.blog_delete)



module.exports = router;