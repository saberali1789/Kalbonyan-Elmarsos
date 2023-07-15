const express = require('express')
const router = express.Router()
const mainRouter = require('./routes/index')

const app = express()


app.use(mainRouter)






app.listen(3030)