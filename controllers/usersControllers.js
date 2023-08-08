const userSchema = require('../models/usersModels')
const bcrypt = require('bcryptjs')

module.exports = {
    register: async(req, res, next) => {
        try {
            const { username, email, password } = req.body
            const exist = await userSchema.findOne({email:email})
            if(exist){
                res.status(400).json({message:'This user exists'})
                return
            }

            const user = new userSchema({
                username:username,
                email:email,
                password:password
            })

            const userSave = await user.save()  

            res.status(201).json({userSave})
        } catch (error) {
            res.status(500).json({message:'An error unexpecter, try again later.'})

        }
    },
    login:async(req, res, next) => {
        try {
            const { email, password } = req.body
            const user = await userSchema.findOne({email:email})

            if(!user){
                res.status(400).json({message:'This user does not exist.'})
            }else{
                if(bcrypt.compareSync(password, user.password)){
                    res.status(200).json({
                        username:user.username,
                        email:user.email
                    })
                }else{
                    res.status(400).json({message:'Password wrong'})
                    return
                }
            }

        } catch (error) {
            res.status(500).json({message:'An error unexpecter, try again later.'})
        }
    }
}