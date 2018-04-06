require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const app = express();
const con = require("./controller");

app.use(json());

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(console.log);

app.get("/api/houses", con.getHouses);
app.post("/api/house", con.addHouse);
app.delete("/api/house/:id", con.deleteHouse);
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
