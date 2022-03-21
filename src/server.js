require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const connectdb = require("./database");

connectdb();

const app = express();
const port = process.env.PORT || 3333;
app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log("BACKEND STARTED");
})