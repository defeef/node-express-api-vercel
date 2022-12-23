//import { express } from '/express';

const express = require('express');

// TODO: fix app
//const app = express;
const app = express();
const PORT = 4000

app.set("view engine", "ejs");

app.get('/', (req, res) => {
  console.log("Render start");
  res.send("Main page");
  //res.render("pages/index");
  console.log("Render end");
})

app.get('/about', (req, res) => {
  console.log("Render start");
  //res.send("<h1>About Page</h1>")
  res.render("pages/about");
  console.log("Render end");
})

app.get('/test', (req, res) => {
  console.log("Render start");
  res.render("pages/test");
  console.log("Render end");
})
})

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
})

// Export the Express API
export default app
module.exports = app;
