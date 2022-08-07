const express= require("express");
const app = express();
const port = 9008;
const fs = require('fs');

app.get('/', (req, res) => {
  res.end('Hello World!');
});

app.get("/list_movies", (req, res) => {
    fs.readFile(__dirname + '/' + 'movies.json', 'utf8', (err, data) => {
        res.end(data);
    });
});

app.get("/other", (req, res) => {
    fs.readFile(__dirname + '/' + 'other.json', 'utf8', (err, data) => {
        res.end(data);
    });
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });