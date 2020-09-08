const express = require("express");
const bodyParser = require("body-parser");

const app = express();
//database
const db = require("./config/database");

// test DB
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

app.get("/", (req, res) => {
  res.send("Index page");
});
app.use(bodyParser());
app.use("/courses", require("./routes/courses"));

const PORT = process.env.port || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
