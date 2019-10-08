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
    (accessToken) => {
      console.log(accessToken);
    }
  ))

// Dynamic Port for Heroku
const PORT = process.env.PORT || 3000;

app.listen(PORT);

