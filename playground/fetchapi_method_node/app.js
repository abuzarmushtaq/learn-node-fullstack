const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use( bodyParser.json() )

app.use(express.static('www'));

app.get('/api', (req, res) => {
    res.send({
        long: 30.2212,
        lat: 23.4556
    });
});

app.post('/get-data', (req, res) => {
    res.json({ status: 'DONE!!!' });
    console.log(req.body)
});

app.listen(4000, () => {
    console.log('App listening on port 4000!');
});