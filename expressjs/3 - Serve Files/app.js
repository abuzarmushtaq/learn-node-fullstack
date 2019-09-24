const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Seperate code into modules aka files
const getRoutes = require('./routes/get');
const postRoutes = require('./routes/post');

app.use(bodyParser.urlencoded({ extended: false }));

/**
 * app.use('/route-name', getRoutes);
 * '/route-name' is used for filtering routes
*/
app.use(getRoutes);
app.use(postRoutes);

app.use((req, res, next) => {
    // .status(404) function for handling 404 req
    res.status(404).sendFile(path.join(__dirname, '../', 'views', '404.html'));
})

app.listen(3000);
