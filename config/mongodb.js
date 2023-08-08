const mongoose = require('mongoose')
const dotenv  = require('dotenv').config()

mongoose.connect(`mongodb+srv://ivangarcilazodv:vMAa7GrIKw1W9zKQ@iglobal-adventure-spa.ngyvgzu.mongodb.net/`)
    .then((res)=>{
        console.log('Success DB conection')
    })
    .catch((e)=>{
        console.log(e)
    })

module.exports = mongoose