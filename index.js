import express from 'express';

const app = express()
const PORT = 4000

app.set("view engine", "ejs");

app.get('/', (req, res) => {
  console.log("Render start");
  res.send("Main page");
  console.log("Render end");
})

app.get('/about', (req, res) => {
  //res.send("About");
  console.log("Render start");
  res.render("pages/about");
  console.log("Render end");
})

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
})

// Export the Express API
export default app
