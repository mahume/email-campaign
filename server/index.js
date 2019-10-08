const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

// This must go before Passport bc Passport uses the Model Class
require('./models/User');
// Shorter syntax for running a file. No need to extract and use as variable
require('./services/passport');

mongoose.connect(process.env.MONGODB_URI);

// New Running Express Application
const app = express();

// MIDDLEWARE
// Tell Express to use cookies
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Exported as function from file. Called with App
require('./routes/authRoutes')(app);

// Dynamic Port for Heroku
const PORT = process.env.PORT || 5000;

app.listen(PORT);
