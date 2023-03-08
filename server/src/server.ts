import express = require('express')
import bodyParser = require('body-parser')
import cors = require('cors')
import path = require('path')

export const app = express()

const corsOptions = {
    origin: process.env.ORIGIN || 'http://localhost:3000'
}
app.use(cors(corsOptions))
app.use(bodyParser.json())

import db = require('./models')

db.sequelize.sync()
    .then(() => {
        console.log('Synced DB')
    })
    .catch((err) => {
        console.log(`Failed to sync DB: ${err.message}`)
    })

require('./routes/blogPost.routes')(app)

// Port to listen for request on
const PORT = process.env.RUNNING_PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})

app.use(express.static(path.resolve(__dirname, '../../client/build')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})