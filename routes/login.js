const router = require('express').Router();
const vkauth = require('../vkApi');
const db = require('../db');
const front = "http://127.0.0.1:4200/";


router.get('/logout', (req, res) => {
    req.session = null;
    res.redirect(302, front)
});


router.get('/vk/callback', async (req, res) => {
    if(req.query.code){
        console.log("sending code to vk");
        try{
            let data = await vkauth.recieveCode(req.query.code);
            await db.add(data.user_id, data.access_token)
            req.session.user_id = data.user_id;
            res.redirect(302, front);
        }
        catch(err){
            console.log(err);
            res.json({success:false, msg: "Not authorised"});
        }
    }
    else{
        res.json({success:false, msg:"No code provided"});
    }
})

module.exports = router;