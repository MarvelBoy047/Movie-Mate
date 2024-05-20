const express = require("express");
const fs = require("fs");
const cors = require("cors")
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const filePath = path.join(__dirname, "login.json");

app.post("/sign-up", (req, res) => {
  const { username, password } = req.body;
  try {
    fs.readFile(filePath, "utf-8", (err, data) => {
      const jsonData = JSON.parse(data);
      jsonData.users.push({ username, password });
      fs.writeFile(filePath, JSON.stringify(jsonData), () => null);
      res.json(1);
    });
  } catch (e) {2
    res.json(0);
  }
});

app.listen(3000, () => {
  console.log("Listening");
});