require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const connectdb = require("./database");

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(routes);

connectdb();

app.listen(port, () => {
    console.log("BACKEND STARTED");
})