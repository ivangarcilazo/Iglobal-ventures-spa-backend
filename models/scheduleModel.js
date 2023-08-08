const mongoose = require('mongoose')

const scheduleSchema = mongoose.Schema({
    fullName:{
        type:String,
        required:[true, 'Full name field is required']
    },
    companyName:{
        type:String,
        required:[true, 'Company name field is required']
    },
    contact:{
        type:Number,
        required:[true, 'Contact field is required']
    },
    email:{
        type:String,
        required:[true, 'Email field is required']
    },
    date:{
        type:Date,
        required:[true, 'Date field is required']
    },
    partner:{
        type:String,
        required:[true, 'Partner field is required']
    },
})

module.exports = mongoose.model('schedule', scheduleSchema)