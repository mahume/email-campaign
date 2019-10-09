const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

// This must go before Passport bc Passport uses the Model Class
require('./models/User');
// Shorter syntax for running a file. No need to extract and use as variable
require('./services/passport');

mongoose.connect(keys.mongodbURI);

// New Running Express Application
const app = express();

// MIDDLEWARE
// Tell Express to use cookies
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Exported as function from file. Called with App
require('./routes/authRoutes')(app);

// Dynamic Port for Heroku
const PORT = process.env.PORT || 8080;

app.listen(PORT);
