const express = require('express')
const app = express()
app.use(express.json())
const cookieParser = require('cookie-parser')
app.use(cookieParser())

const cors = require('cors')
app.use(cors());


/** routes */
const authRoutes = require('./routes/authRoute')
app.use('/api/v1/', authRoutes)
module.exports = app