const express = require('express');
const app = express();
const path = require('path');

app.use('/', express.static(__dirname + '/'));
app.use('/mathType', express.static(__dirname + '/plugins/mathType'));
app.get('/', function (req, res) {
    const htmlPath = path.resolve(__dirname + '/index.html');
    res.sendFile(htmlPath);
});

app.listen(10000, () => {
    console.log('Server listening on port 10000');
});