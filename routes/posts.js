const express = require('express');
const router = express.Router();

//temp in-mem db
const posts = [];

router.get('/write', (req, res) => {
    res.render('new.ejs');
})

router.get('/sample', (req, res) => {
    res.render('post.ejs');
})

//Get the new post
router.post('/', (req, res) => {
    let post = req.body;
    post['id'] = Date.now();
    posts.push(post);
    res.redirect(`/posts/${post.id}`);
})

router.get('/:id', (req, res) => {
    res.render('post.ejs', { post : posts[0] });
})
module.exports = { router : router, posts : posts };