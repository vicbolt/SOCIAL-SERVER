const express = require('express')

const cors = require('cors')

const morgan = require('morgan')

const path = require('path')

const routes = require('./routes/index')


const server = express()



//settings
server.set('PORT', process.env.PORT || 5500)

//middlewares
server.use(cors())
server.use(morgan('dev'))
server.use(express.json())
server.use(express.urlencoded({ extended: false })) // para recibir multipart

//routes
server.use('/api/comment', routes.comment)
server.use('/api/post', routes.post)
server.use('/api/user', routes.user)

server.get('/', (req,res) => {
    return res.json('Welcome')
})

//static folder
server.use(express.static(path.join(__dirname, 'statics')))


module.exports = server