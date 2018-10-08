const axios = require("axios");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const path = require("path");

const handlebars = require("express-handlebars");

app.engine('.hbs', handlebars({ extname: '.hbs' }));

app.set("PORT", PORT);

app.use(express.static(path.join(__dirname, 'assets')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');

app.get('/', function (req, res) {
    //I DONT GET WHY THIS WORKS
    console.log("Scraping!");
    let results = [];

    let url = `https://indreed.herokuapp.com/api/jobs?q=junior+developer&l=san+francisco&limit=50`;
    axios({
        method: 'get',
        url
    })
        .then(function (response) {
            let jobs = response.data;
            res.render("index", { title: "JobFinder", jobs: jobs });
        })
        .catch(function (error) {
            console.log(error);
        });
});

app.listen(app.get('PORT'), function () {
    console.log("Listening on http://localhost:" + app.get('PORT'));
});