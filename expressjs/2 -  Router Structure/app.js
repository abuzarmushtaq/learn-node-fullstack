const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Seperate code into modules aka files
const getRoutes = require('./routes/get');
const postRoutes = require('./routes/post');

app.use(bodyParser.urlencoded({extended: false}));

app.use(getRoutes);
app.use(postRoutes);

app.use((req, res, next) => {
    // .status(404) function for handling 404 req
    res.status(404).send('<h1>Page not found</h1>');
})

app.listen(3000);
