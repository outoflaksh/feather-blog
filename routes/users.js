const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Post = require('../models/post');
const bcrypt = require('bcrypt');
const passport = require('passport');
const ensureAuthentication = require('../auth');

//LOGIN
router.get('/login', (req, res) => {
    res.render('login.ejs');
})

router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect : '/',
        failureRedirect : '/users/login'
    })(req, res, next);
})

//SIGNUP
router.get('/signup', (req, res) => {
    res.render('signup.ejs');
})

router.post('/signup', async (req, res) => {
    const errors = [];

    if (req.body.password.length < 8) {
        errors.push({ 'message' : 'Password should be greater than 8 characters'});
    }

    if (req.body.password != req.body.password2) {
        errors.push({ 'message' : 'Passwords should match'});
    }

    if (await User.findOne({ username : req.body.username })) {
        errors.push({ 'message' : 'Username already exists please choose something else'});
    }

    if (await User.findOne({ email : req.body.email })) {
        errors.push({ 'message' : 'Email already registered please login'});
    }


    if (errors.length > 0) {
        res.render('signup.ejs', { errors : errors });
    } else {
        try {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            let newUser = new User({
                username : req.body.username,
                firstName : req.body.firstName,
                lastName : req.body.lastName,
                email : req.body.email,
                password : hashedPassword,
            });

            newUser = await newUser.save();
            res.redirect('/users/login');
        } catch(err) {
            console.log(err);
        }
    }
})


//LOGOUT
router.get('/logout', ensureAuthentication, (req, res) => {
    req.logout();
    res.redirect('/');
})


//PROFILE PAGE
router.get('/:username', async (req, res) => {
    let username = req.params.username;
    let user = await User.findOne({ username : username });
    if (user == null) {
        res.redirect('/');
    } else {
        let userPosts = await Post.find({ userId : user.id });
        res.render('about.ejs', { user : user, userPosts : userPosts });
    }
})

module.exports = router;