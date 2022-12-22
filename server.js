const express = require('express');

const app = express()
const PORT = 4000

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
})

app.get('/', (req, res) => {
  res.render("/views/pages/index.ejs");
})

app.get('/about', (req, res) => {
  res.render("/views/pages/about.ejs");
})

// Export the Express API
module.exports = app
