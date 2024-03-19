const express = require("express");
const os = require("os");
const app = express();
const hostname = os.hostname();
const port = 8080;

app.get("/", (req, res) => {
  res.json({ message: `Hello Node 1 ${hostname}` });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
