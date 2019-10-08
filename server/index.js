const express = require('express');

// Shorter syntax for running a file. No need to extract and use as variable
require('./services/passport');

// New Running Express Application
const app = express();

// Exported as function from file. Called with App
require('./routes/authRoutes')(app);


// Dynamic Port for Heroku
const PORT = process.env.PORT || 5000;

app.listen(PORT);

