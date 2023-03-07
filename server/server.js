const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

const corsOptions = {
    origin: 'http://localhost:8081'
}

app.use(cors(corsOptions))

// parse request of content-type - application/json
app.use(bodyParser.json())

const db = require('./models')
db.sequelize.sync()
    .then(() => {
        console.log('Synced DB')
    })
    .catch((err) => {
        console.log(`Failed to sync DB: ${err.message}`)
    })

// base route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome!' })
})

require('./routes/blogPost.routes')(app)

// Port to listen for request on
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})