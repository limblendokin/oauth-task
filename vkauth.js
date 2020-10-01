const { reject } = require('async');
const axios = require('axios');
const keys = require('./config/keys');


const baseUrl = "https://oauth.vk.com/access_token";
const redirectUri = "http://127.0.0.1:5500/oauth/vk/callback"
const appId = keys.vk.appId;
const appSecret = keys.vk.secret;

const recieveCode = (code) => {
    return new Promise( (resolve, reject) => {
        axios.get(baseUrl, {
            params: {
                client_id: appId,
                client_secret: appSecret, 
                code: code, 
                redirect_uri: redirectUri
            }
        })
            .then( (res) => {
                resolve(res.data);
            })
            .catch( (err) => {
                console.log(err);
                reject(err)
            })
        
    });
}

module.exports = {recieveCode:recieveCode};