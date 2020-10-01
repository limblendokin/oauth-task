const router = require('express').Router();
const { getFriends, getProfile } = require('../vkApi');
const db = require('../db');

const authCheck = (req, res, next) => {
    if(!req.session.user_id){
        res.json({
            success:false,
            reason: "Failed to authenticate"
        });
    } else {
        next();
    }
};

router.get('/friends', authCheck, async (req, res) => {
    let user = await db.getOne(req.session.user_id);
    getFriends(user.vkId, user.accessToken)
        .then( friends => {
            res.json({
                success: true,
                friends:friends
            });
        })
        .catch( err => {
            res.json({
                success: false,
                reason: err
            });
        });
})

router.get('/profile', authCheck, async (req, res) => {
    let user = await db.getOne(req.session.user_id);
    console.log(user);
    getProfile(user.vkId, user.accessToken)
        .then(profile=>{
            res.json({
                success:true,
                profile: profile
            })
        })
        .catch( err => {
            res.json({
                success: false,
                reason: err
            });
        });
})


module.exports = router;