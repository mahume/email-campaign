require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

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
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
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