const axios = require("axios");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const path = require("path");

const handlebars = require("express-handlebars");

app.engine('.hbs', handlebars({ extname: '.hbs' }));