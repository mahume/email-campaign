require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// Model Class "User" avoids issues with testing
const mongoose = require('mongoose');
const User = mongoose.model('users');


passport
  .use(new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      const isRegistered = await User.findOne({ googleID: profile.id })
      if (isRegistered) return
      new User({ googleID: profile.id }).save();
    }
  ))