/* eslint-disable no-console */
import express from "express";
import path from "path";

const app = express();
const port = process.env.PORT || 80;

app.use(express.static(path.join(__dirname, "../dist")));
app.get("/redux/v1", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/public/redux/v1", "index.html"));
});

app.get("/redux/v2", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/public/redux/v2", "index.html"));
});

app.get("/mobx/v1", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/public/mobx/v1", "index.html"));
});

app.get("/context/v1", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/public/context/v1", "index.html"));
});


app.listen(port, (err) => {
  if (err) {
    console.log("Error while launching the server");
  } else {
    console.log(`Server is running on port ${port}`);
  }
});
