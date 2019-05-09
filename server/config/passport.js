var JwtStrategy = require('passport-jwt').Strategy
var ExtractJwt = require('passport-jwt').ExtractJwt

// load up the user model
var User = require('../models/user')
var settings = require('../config/settings') // get settings file

module.exports = function (passport) {
  var opts = {}
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt')
  opts.secretOrKey = settings.secret
  passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({ username: jwt_payload.username }, function (err, user) {
      if (err) {
        return done(err, false)
      }
      if (user) {
        done(null, user)
      } else {
        done(null, false)
      }
    })
  }))
}
