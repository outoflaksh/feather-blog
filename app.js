const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const passport = require('passport');
const session = require('express-session');

//MONGODB CONNECTION
mongoose.connect('mongodb://localhost/blog-posts', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex : true,
});

const PORT = process.env.PORT || 3000;

const app = express();

//EJS
app.use(expressLayouts)
app.set('view engine', 'ejs');

//BODYPARSER
app.use(express.urlencoded({ extended: false }))

//METHOD OVERRIDE
app.use(methodOverride('_method'));

//STATIC
app.use(express.static('public'));

//EXPRESS SESSION
app.use(session({
    secret: 'secretkey',
    resave: false,
    saveUninitialized: true,
  }))

//PASSPORT
app.use(passport.initialize());
app.use(passport.session());

//ROUTES
app.use('/', require('./routes/index'));
app.use('/posts', require('./routes/posts'));
app.use('/users', require('./routes/users'));

app.listen(PORT, console.log(`Server up and running on port ${PORT}`));