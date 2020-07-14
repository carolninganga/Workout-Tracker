const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = 5000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

// routes
const routes = require("./routes");
app.use(routes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
