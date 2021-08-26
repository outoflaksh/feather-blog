const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const ensureAuthentication = require('../auth');

router.get('/', async (req, res) => {
    const posts = await Post.find().sort({ createdAt : 'desc' });
    res.render('home.ejs', { posts : posts });
})

router.get('/about', ensureAuthentication, (req, res) => {
    res.render('about.ejs', { user : req.user });
})


module.exports = router;