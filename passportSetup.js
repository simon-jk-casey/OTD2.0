const passport = require('passport')
const bcrypt = require('bcrypt')
const Strategy = require('passport-local').Strategy

const db = require('./db/db')

const createUserObject = (user) => {
  return {

  }
}

passport.use(new Strategy((username, password, done) => {

}))

passport.serializeUser((user, done) => {

})

passport.deserializeUser((id, done) => {

})

module.exports = passport
