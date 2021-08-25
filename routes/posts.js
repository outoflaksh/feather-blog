const express = require('express');
const router = express.Router();
const Post = require('../models/post');

//temp in-mem db
const posts = [];

//NEW POST
router.get('/write', (req, res) => {
    res.render('new.ejs');
})

//RETRIEVE NEW POST
router.post('/', async (req, res) => {
    let newPost = new Post({
        title : req.body.title,
        subtitle : req.body.subtitle,
        mainBody : req.body.mainBody,
        coverImageSource : req.body.coverImageSource,
    })
    try {
        newPost = await newPost.save();
        res.redirect(`/posts/${newPost.id}`);
    } catch(err) {
        console.log(err);
    }
})

//ROUTE TO ARTICLE
router.get('/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);
    
    if (post == null) {
        res.redirect('/');
    }
    
    res.render('post.ejs', { post : post })

})

router.delete('/:id', async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);

    res.redirect('/');
})

module.exports = { router : router, posts : posts };