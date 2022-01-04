const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("¡Hola Mundo!");
});

app.listen(process.env.PORT, () =>
  console.log(`Server on port ${process.env.PORT}`)
);
