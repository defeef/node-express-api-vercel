//import { express } from 'express';
//import { express } from '/node_modules/express';
const express = require("/node_modules/express");

// TODO: fix app
//const app = express;
const app = express();
const PORT = 4000

app.set("view engine", "ejs");

app.get('/', (req, res) => {
  console.log("Render start");
  //res.send("Main page");
  res.render("pages/index");
  console.log("Render end");
})

app.get('/about', (req, res) => {
  console.log("Render start");
  //res.send("About");
  res.render("pages/about");
  console.log("Render end");
})

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
})

// Export the Express API
//export default app
module.exports = app;
