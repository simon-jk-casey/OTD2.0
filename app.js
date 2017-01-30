const express = require('express')
const app = express()
const path = require('path')
const cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
const cors = require('cors')
const api = require('./routes/api')
const passport = require ('./passportSetup')

const corsOptions = {
  origin: true,
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
  preflightContinue: false,
  credentials: true
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(require('express-session')({
  secret: 'They call them fingers but Ive never seen them fing',
  resave: false,
  saveUnitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

app.use('/api/v1', api);

module.exports = app
