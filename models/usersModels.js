const mongoose = require('../config/mongodb')
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:[true, 'Username field required']
    },
    email:{
        type:String,
        required:[true,'Email field required']
    },
    password:{
        type:String,
        required:[true,'Password field required']
    }
})

userSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, 10)
    next()
})

module.exports = mongoose.model('users', userSchema)
