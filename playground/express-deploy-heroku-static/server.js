const express = require('express');
const app = express();

app.use(express.static('./www'));

app.use((req, res, next) => {
    res.status(404).send('<h1>Page Not found :(</h1>')
})

app.listen(process.env.PORT || 8080);
