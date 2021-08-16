const express = require('express');
const router = express.Router();
const posts = require('./posts').posts;

router.get('/', (req, res) => {
    res.render('home.ejs', { posts : posts });
})

router.get('/about', (req, res) => {
    res.render('about.ejs');
})

router.get('/contact', (req, res) => {
    res.render('contact.ejs');
})

module.exports = router;