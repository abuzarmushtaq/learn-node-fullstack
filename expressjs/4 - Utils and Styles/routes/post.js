const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();


router.get('/add', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add.html'));
});


router.post('/add', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
