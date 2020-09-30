const router = require('express').Router();
const passport = require('passport');
const axios = require('axios');

const authCheck = (req, res, next) => {
    if(!req.user){
        //res.redirect('http://localhost:4200');
        res.json({
            success:false,
            reason: "Failed to authenticate"
        });
    } else {
        next();
    }
};

const getFriends = (userId, accessToken) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://api.vk.com/method/friends.get?user_id=${userId}&access_token=${accessToken}&v=5.21&order=random&count=5&fields=photo_200,domain`)
            .then(res => {
                console.log(res);
                if(res.error){
                    reject(res.error_msg);
                }
                else{
                    resolve(res.data.response.items);
                }
            })
            .catch(err=>{
                console.log(err);
                reject(err);
            })
    })
}

router.get('/', authCheck, (req, res) => {
    getFriends(req.user.vkId, req.user.accessToken)
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

module.exports = router;