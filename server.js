const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const infoRouter = require("./routes/info");

const app = express();

// Body parser middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB config
const db = "mongodb://benz:123benz@ds125381.mlab.com:25381/test_hospital";

mongoose
  .connect(db)
  .then(() => console.log(`MongoDB Connected`))
  .catch(err => console.log(err));

app.use("/info", infoRouter);

// Set port 5000
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
