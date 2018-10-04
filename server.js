//simple server to get the project started
/*
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', function (req, res) {
    res.send("Job Finder");
});

app.listen(PORT, () => {
    console.log("Server listening on port", PORT);
})
*/

//messing around with a weather app to remember how cheerio and request work
var request = require("request");
var cheerio = require("cheerio");
var url = "http://www.wunderground.com/cgi-bin/findweather/getForecast?&query=" + 94526;

request(url, function (error, response, body) {
    if (!error) {
        var $ = cheerio.load(body),
            temperature = $("[data-variable='temperature'].wx-value").html();

        console.log("It's " + temperature + " degrees Fahrenheit.");
    } else {
        console.log("We've encountered an error: " + error);
    }
});
