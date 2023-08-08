const scheduleSchema = require('../models/scheduleModel')

module.exports = {
    newSchedule:async(req, res, next) =>{
        try {
            const { fullName, companyName, contact, email, date, partner } = req.body

            const dateNoAble = await scheduleSchema.findOne({date:date})
           
            if(dateNoAble){
                res.status(400).json({message:'This date is busy, try another one.'})
            }else{
                
                const documentSchedule = new scheduleSchema({
                    fullName:fullName,
                    companyName:companyName,
                    contact:contact,
                    email:email,
                    date:date,
                    partner:partner
                })
                
                const saved = await documentSchedule.save()

                res.status(201).json({success:true})
            }

        } catch (error) {
            res.status(500).json({message:'An error unexpecter, try again later.'})
            
        }
    },
    getSchedule:async(req, res, next) => {
        try {
            const { email } = req.params

            const agendaList = await scheduleSchema.find({email:email})

            res.status(200).json(agendaList)

        } catch (error) {
            res.status(500).json({message:'An error unexpecter, try again later.'})

        }
    },
    deleteSchedule:async(req, res, next) =>{
        try {
            const { _id } = req.body
           
            const deleteSchedule = await scheduleSchema.findOneAndDelete({_id:_id})

            res.status(201).json({success:true})

        } catch (error) {
            res.status(500)
        }
    },
    updateSchedule:async(req, res, next) =>{
        try {
            const { toUpdateSchedule } = req.body

            const dateNoAble = await scheduleSchema.findOne({date:toUpdateSchedule.date})

            if(dateNoAble &&  toUpdateSchedule._id !== dateNoAble._id.toString()){
                res.status(400).json({message:'This date is busy, try another one.'})
            }else{
                const scheduleUpdated = await scheduleSchema.findOneAndUpdate({_id:toUpdateSchedule._id}, toUpdateSchedule, {new:true})
                res.status(202).json({success:true})
            }
        } catch (error) {
            res.status(500).json({message:'An error unexpecter, try again later.'})
            
        }
    }
}