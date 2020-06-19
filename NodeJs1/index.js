const express = require("express");

const app = express();
const port = 3000;

app.get("/", (request, response) => {
  response.send("Hello NodeJs!");
});

app.listen(port, () => {
  console.log(`App is listening port${port}`);
});
