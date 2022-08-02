const geoCode = require("../utils/geoCode");
const stdin = process.openStdin();
const path = require("path");
const express = require("express");
const axios = require("axios");
require('dotenv').config();

const app = express();

const publicDirectoryPath = path.join(__dirname, "../public");

app.set("view engine", "ejs");
app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
  const city = req.params.city;
  res.render("index", {
    title: "Weather App",
    name: "Roxas",
  });
});

app.get("/temperature/:city", async (req, res) => {
  const city = req.params.city;
  const temperature = await geoCode(city);
  console.log(temperature);
  res.render("temperature", {
    title: `Weather - ${city}`,
    temperature: `Il fait ${temperature} degrés celcius à ${city}.`
  });
});

const port = 4000;

app.listen(port, () => console.log(`Listenning on port ${port}...`));
