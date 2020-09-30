const router = require('express').Router();
const passport = require('passport');

router.get('/vk', 
    passport.authenticate('vkontakte', {
        scope: 2
    })
);


router.get('/logout', (req, res) => {
    res.send('Logging out');
});

router.get('/vk/callback', passport.authenticate('vkontakte'), (req, res) => {
    console.log(res);
    res.redirect('http://localhost:4200');
})


module.exports = router;