const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Seperate code into modules aka files
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // .status(404) function for handling 404 req
    res.status(404).send('<h1>Page not found</h1>');
})

app.listen(3000);
