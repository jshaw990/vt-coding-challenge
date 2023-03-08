import IBlogPost from '../../../types/blogPost.type';
import db = require('../models');
const BlogPost = db.blogPost;
const { Op } = db.Sequelize;

exports.findAll = async (req: any, res: any): Promise<IBlogPost[] | any> => {
    const { skip = 0 } = req.query;
    try {
        const blogPosts = await BlogPost.findAll({
            limit: 6,
            offset: parseInt(skip),
            where: { published_at: { [Op.not]: null } }
        });
        res.send(blogPosts);
    } catch (error) {
        res.status(500).send({
            message: `An error occurred while retrieving blog posts: ${error.message}`
        });
    }
};

exports.findOneBySlug = async (req: any, res: any): Promise<IBlogPost | any> => {
    const { slug } = req.params;
    try {
        const blogPost = await BlogPost.findOne({ where: { slug } });
        if (blogPost) {
            res.send(blogPost);
        } else {
            res.status(404).send({ message: `Cannot find blog post with the slug: ${slug}` });
        }
    } catch (error) {
        res.status(500).send({
            message: `An error occurred while retrieving the blog post with the slug: ${slug}: ${error.message}`
        });
    }
};
