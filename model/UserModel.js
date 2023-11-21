const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user = new Schema(
    {
        email: {type: String, maxLength: 255},
        password: {type: String, maxLength: 255},
        Image: {type: String, maxLength: 255}
    },
    {timestamps: true}
)
module.exports = mongoose.model('user',user);