const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
//app.use(express.static('static'));

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// Load routing
require('./route/index')(app);

app.use((err, req, res, next) => {
    res.end('Problem...');
    console.log(err);
});

app.listen(3000, function () {
    console.log('Open at :3000');
});
