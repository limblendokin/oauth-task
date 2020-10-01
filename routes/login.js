const router = require('express').Router();
const { route } = require('./friends');
const vkauth = require('../vkauth');
const front = "http://localhost:4200/";

router.get('/logout', (req, res) => {
    req.session = null;
    res.redirect(302, front)
});


router.get('/vk/callback', async (req, res) => {
    if(req.query.code){
        console.log("sending code to vk");
        try{
            let data = await vkauth.recieveCode(req.query.code);
            console.log(data);
            req.session.user_id = data.user_id;
            res.redirect(302, front);
        }
        catch(err){
            res.json({success:false})
        }
    }
    else{
        console.log(req.query);
    }
})

module.exports = router;