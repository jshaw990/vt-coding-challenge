require('dotenv').config()

module.exports = {
    HOST: process.env.PG_HOST,
    USER: process.env.PG_USER,
    PASSWORD: process.env.PG_PASSWORD,
    DB: process.env.PG_DB_NAME,
    PORT: process.env.PG_PORT,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true
        }
    }
}
