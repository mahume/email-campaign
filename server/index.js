const express = require('express');

// New Running Express Application
const app = express();

app.get('/', (req, res) => {
  res.send({ test: 'Connected' })
})

app.listen(3000);