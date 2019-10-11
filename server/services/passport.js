const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { googleClientID, googleClientSecret } = require('../config/keys');

// Model Class "User" avoids issues with testing
const mongoose = require('mongoose');
const User = mongoose.model('users');

// Takes user model and generates cookie to send back to user
passport.serializeUser((user, done) => {
  // This id is the MongoDB _id
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    })
})

passport
  .use(new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const isRegistered = await User.findOne({ googleID: profile.id })
      
      if (isRegistered) {
        return done(null, isRegistered);
      }
      
      const user = await new User({ googleID: profile.id }).save()
      done(null, user);
    }
  ));