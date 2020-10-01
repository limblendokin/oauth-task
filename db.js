const { vk } = require('./config/keys');
const User = require('./models/User');

const add = (vkId, accessToken) =>{
    return User.findOneAndUpdate({vkId:vkId}, {
        vkId: vkId,
        accessToken: accessToken
    },{
        new: true,
        upsert: true,
        useFindAndModify: false
    }).exec();
}

const getOne = (vkId) => {
    return User.findOne({vkId:vkId}).exec();
}

module.exports = { add:add, getOne:getOne}