const express = require('express');
const path = require('path');
const port = process.env.PORT || 3001;
const app = express();
const fs = require ('fs')

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const databasePath = path.join(__dirname, 'build/assets', 'db.json')

app.get('/db', (req, res) => {
    fs.readFile(databasePath, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        res.send(JSON.parse(data));
    });
});
app.get('/db/data', (req, res) => {
    fs.readFile(databasePath, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        res.send(JSON.parse(data));
    });
});
app.listen(port);