const passport = require('passport');
const VKontakteStrategy = require('passport-vkontakte').Strategy;
const keys = require('./keys');
const User = require('../models/User');

passport.serializeUser( (user, done) => {
    done(null, user.id);
})
passport.deserializeUser( (id, done) => {
    User.findById(id).then( (user) => {
        done(null, user);
    })
    
})

passport.use(
    new VKontakteStrategy({
        clientID: keys.vk.appId,
        clientSecret: keys.vk.secret,
        callbackURL: 'http://35.228.127.106:5500/oauth/vk/callback'
    }, (accessToken, refreshToken, params, profile, done) => {
        console.log(params);
        User.findOne({vkId:profile.id})
            .then(existingUser => {
                if(existingUser){
                    console.log(`login from existing user ${existingUser.name}`);
                    done(null, existingUser)
                }
                else{
                    new User({
                        vkId: profile.id,
                        name: profile.displayName,
                        accessToken: accessToken
                    }).save().then(newUser => {
                        done(null, newUser);
                    });
                }

            })
            .catch(err => {
                done(err, null);
            })
        console.log(profile);
    })
);
