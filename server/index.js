require('dotenv').config();
const express = require('express');

// New Running Express Application
const app = express();

// Passport.js
const passport = require('passport');
// Setup Google Strategy for Passport.js
const GoogleStrategy = require('passport-google-oauth20').Strategy;
passport
  .use(new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    }, 
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken);
      console.log(refreshToken);
      console.log(profile);
    }
  ))

// Route to start OAuth flow
app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

// Redirect Route for Access Token
app.get('/auth/google/callback', passport.authenticate('google'))



// Dynamic Port for Heroku
const PORT = process.env.PORT || 5000;

app.listen(PORT);

