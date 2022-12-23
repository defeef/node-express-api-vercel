//import { express } from '/express';

const express = require('express');

// TODO: fix app
//const app = express;
const app = express();
const PORT = 4000

const testHTML = "<!DOCTYPE html>\n<html>\n<head>\n<meta charset=\"utf-8\">\n<style>\n</style>\n<title>Document</title>\n</head>\n<body>\n</body>\n</html>"

app.set("view engine", "ejs");

app.get('/', (req, res) => {
  console.log("Render start");
  //res.send("Main page");
  //res.render("pages/index");
  console.log("Render end");
})

app.get('/about', (req, res) => {
  console.log("Render start");
  res.send(testHTML);
  //res.render("pages/about");
  console.log("Render end");
})

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
})

// Export the Express API
export default app
module.exports = app;
