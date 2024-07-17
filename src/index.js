import express from "express";
const app = express();
app.use("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.listen(3000, () => console.log("App is listening on port 3000"));
