const dbConfig = require('../config/db.config')

const Sequelize = require('sequelize')
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAliases: false,
    dialectOptions: dbConfig.dialectOptions
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.blogPost = require('./blogPost.model')(sequelize, Sequelize)

module.exports = db