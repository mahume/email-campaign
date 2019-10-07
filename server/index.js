const express = require('express');

// New Running Express Application
const app = express();

app.get('/', (req, res) => {
  res.send({ test: 'Connected' })
})

// Dynamic Port for Heroku
const PORT = process.env.PORT || 3000;

app.listen(PORT);