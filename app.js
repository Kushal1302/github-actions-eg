import express from "express";
import path from "path";
import "dotenv/config";

const app = express();
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(8000, () => console.log("Server is Running"));
