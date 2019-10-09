const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

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
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      const isRegistered = await User.findOne({ googleID: profile.id })
      if (isRegistered) {
        done(null, isRegistered);
      } else {
        new User({ googleID: profile.id })
          .save()
          .then(user => done(null, user));
      }
    }
  ))