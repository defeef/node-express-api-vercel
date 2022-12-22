const express = require('express');

const app = express()
const PORT = 4000

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
})

app.get('/', (req, res) => {
  console.log("Render start");
  res.send("Main page");
  console.log("Render end");
})

app.get('/about', (req, res) => {
  //res.send("About");
  console.log("Render start");
  res.render("pages/about.ejs");
  console.log("Render end");
  //res.render("/views/pages/about.ejs");
})

// Export the Express API
module.exports = app
