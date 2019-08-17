const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");

const app = express();

//DB Config
const db = require("./config/keys").mongoURI;

//Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.log(err.db));

app.get("/", (req, res) => res.send("ChordsGarage!!"));

//Use Routes

app.use("/api/users", users);
app.use("/api/profile", profile);

const port = process.env.PORT || 10000;

app.listen(port, () => console.log(`Server running on port ${port}`));
