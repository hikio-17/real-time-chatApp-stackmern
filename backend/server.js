const express = require("express");
const app = express();

require("colors");

app.get("/", (req, res) => {
  res.send("<h1>Server is running...</h1>");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ==> http://localhost:${PORT}`.bgWhite);
});
