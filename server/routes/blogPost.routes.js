module.exports = app => {
    const blogPost = require('../controllers/blogPost.controller')
    const router = require('express').Router()

    router.get('/', blogPost.findAll)

    router.get('/:id', blogPost.findOne)

    app.use('/api/blog', router)
}