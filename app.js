const axios = require("axios");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const path = require("path");

const handlebars = require("express-handlebars");

app.engine('.hbs', handlebars({ extname: '.hbs' }));

app.set("PORT: ", PORT);

app.use(express.static(path.join(__dirname, 'assets')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');

app.get('/', function (req, res) {
    res.render("index", { title: "JobFinder" })
});

app.listen(app.get('PORT'), function () {
    console.log("Listening on http://localhost:" + PORT);
});