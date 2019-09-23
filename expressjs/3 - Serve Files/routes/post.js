const express = require('express');
const path = require('path');


const router = express.Router();

router.get('/add-product', (req, res, next) => {
  // res.sendFile('../views/form');
  res.sendFile(path.join(__dirname, '../', 'views', 'post.html'))
});

router.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
