const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const bcrypt = require('bcrypt');

function initializePassport(passport) {
    async function authenticateUser(username, password, done) {
        let user = await User.findOne( { username : username } );
        if (!user) {
            done(null, false, { message : "Username doesn't exist"})
        }

        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;

            if (isMatch) {
                done(null, user);
            } else {
                done(null, false, { message : "Incorrect password"});
            }
        });

    }

    passport.use( new LocalStrategy({ usernameField : 'username', passwordField : 'password' }, authenticateUser));

    passport.serializeUser((user, done) => {
        let id = user.id;
        done(null, id);
    })

    passport.deserializeUser(async (id, done) => {
        try {
            let user = await User.findById(id);
            done(null, user)
        } catch(err) {
            done(err, false)
        }
    })
}

module.exports = initializePassport;