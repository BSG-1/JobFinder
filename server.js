const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', function (req, res) {
    res.send("Job Finder");
});

app.listen(PORT, () => {
    console.log("Server listening on port", PORT);
})