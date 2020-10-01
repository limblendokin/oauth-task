const axios = require('axios');
const keys = require('./config/keys');


const baseUrl = "https://oauth.vk.com/access_token";
const redirectUri = "http://127.0.0.1:4200/api/oauth/vk/callback"
const appId = keys.vk.appId;
const appSecret = keys.vk.secret;
const v = 5.124;

const recieveCode = (code) => {
    return new Promise( (resolve, reject) => {
        axios.get(baseUrl, {
            params: {
                client_id: appId,
                client_secret: appSecret, 
                code: code, 
                redirect_uri: redirectUri,
                v:v
            }
        })
            .then( (res) => {
                console.log(res);
                resolve(res.data);
            })
            .catch( (err) => {
                console.log(err);
                reject(err)
            })
        
    });
}

const getFriends = (userId, accessToken) => {
    return new Promise((resolve, reject) => {
        axios.get("https://api.vk.com/method/friends.get", {
            params:{
                user_id: userId,
                access_token: accessToken,
                v: v,
                order: "random",
                count: 5,
                fields: "photo_200,domain"
            }
        })
            .then(res => {
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

const getProfile = (userId, accessToken) => {
    return new Promise((resolve, reject) => {
        axios.get("https://api.vk.com/method/users.get", {
            params:{
                user_id: userId,
                access_token: accessToken,
                v: v,
                fields: "photo_200,domain"
            }
        })
            .then(res => {
                if(res.error){
                    reject(res.error_msg);
                }
                else{
                    resolve(res.data.response[0]);
                }
            })
            .catch(err=>{
                console.log(err);
                reject(err);
            })
    })
}

module.exports = {recieveCode:recieveCode, getFriends:getFriends, getProfile:getProfile};