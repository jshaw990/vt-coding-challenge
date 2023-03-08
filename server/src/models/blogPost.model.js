module.exports = (sequelize, Sequelize) => {
    const BlogPost = sequelize.define('blogs', {
        id: {
            type: Sequelize.SMALLINT,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING
        },
        slug: {
            type: Sequelize.STRING
        },
        content: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.STRING
        },
        published_at: {
            type: Sequelize.DATE,
            allowNull: true
        },
    }, {
        createdAt: false,
        updatedAt: false
    })

    return BlogPost
}