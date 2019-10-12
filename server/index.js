const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
// const keys = require('./config/keys');
const { mongodbURI, cookieKey } = require('./config/keys');

// This must go before Passport bc Passport uses the Model Class
require('./models/User');
// Shorter syntax for running a file. No need to extract and use as variable
require('./services/passport');

mongoose.connect(mongodbURI);

// New Running Express Application
const app = express();

// MIDDLEWARE
// Parses requests and assigns to req.body
app.use(bodyParser.json());
// Tell Express to use cookies
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Exported as function from file. Called with App
require('./routes/authRoutes')(app);
require('./routes/stripeRoutes')(app);

// Dynamic Port for Heroku
const PORT = process.env.PORT || 8080;

app.listen(PORT);
