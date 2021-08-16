const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/', async (req, res) => {
    const posts = await Post.find().sort({ createdAt : 'desc' });
    res.render('home.ejs', { posts : posts });
})

router.get('/about', (req, res) => {
    res.render('about.ejs');
})

router.get('/contact', (req, res) => {
    res.render('contact.ejs');
})

module.exports = router;