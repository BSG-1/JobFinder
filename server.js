const express = require("express");
const bodyParser = require("bodyParser");
const app = express();
const PORT = process.env.PORT || 8080;

const axios = require("axios");
const cheerio = require("cheerio");


app