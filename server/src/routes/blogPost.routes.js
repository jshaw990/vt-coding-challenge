module.exports = app => {
    const blogPost = require('../controllers/blogPost.controller')
    const router = require('express').Router()

    router.get('/', blogPost.findAll)

    router.get('/:slug', blogPost.findOneBySlug)

    app.use('/api/blog', router)
}