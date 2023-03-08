const db = require('../models')
const BlogPost = db.blogPost
const Op = db.Sequelize.Op

exports.findAll = (req, res) => {
    // skip specified number of posts for pagination - default of 0
    const offset = req.query.skip || 0

    BlogPost.findAll({ limit: 6, offset, where: { published_at: { [Op.not]: null } } })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error occured while retrieving many blog posts. Please try again."
            })
        })
}

// exports.findOneById = (req, res) => {
//     const id = req.params.id

//     BlogPost.findByPk(id)
//         .then(data => {
//             if (data) {
//                 res.send(data)
//             } else {
//                 res.status(404).send({
//                     message: `Cannot find blog post with the id: ${id}`
//                 })
//             }
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: err.message || `An error occured while retieving blog post with the id: ${id}`
//             })
//         })
// }

exports.findOneBySlug = (req, res) => {
    const slug = req.params.slug

    BlogPost.findOne({ where: { slug: slug } })
        .then(data => {
            if (data) {
                res.send(data)
            } else {
                res.status(404).send({
                    message: `Cannot find blog post with the slug: ${slug}`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `An error occured while retieving blog post with the slug: ${slug}`
            })
        })
}
