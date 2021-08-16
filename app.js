const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const PORT = process.env.PORT || 3000;

const app = express();

//EJS
app.use(expressLayouts)
app.set('view engine', 'ejs');

//BODYPARSER
app.use(express.urlencoded({ extended: false }))

//STATIC
app.use(express.static('public'));

//ROUTES
app.use('/', require('./routes/index'));
app.use('/posts', require('./routes/posts').router)

app.listen(PORT, console.log(`Server up and running on port ${PORT}`));