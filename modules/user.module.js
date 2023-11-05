const prisma = require('../helpers/database')
const Joi = require('joi')
const bcrypt= require('bcrypt')
class _user{
    createUser=async (body)=>{
        try{
            //validation input
            const schema=Joi.object({
                name:Joi.string().required(),
                email:Joi.string().required(),
                password:Joi.string().required(),
            })
            const validation=schema.validate(body)
            if(validation.error){
                const errorDetails=validation.error.details.map(detail=>detail.message)
                return{
                    status:false,
                    code:422,
                    error:errorDetails.join(',')
                }
            }
            const password=bcrypt.hashSync(body.password, 10)
            console.log(body.password, password)
            const add=await prisma.user.create({
                data:{
                    name: body.name,
                    email:body.email,
                    password:password
                }
            })
            return{
                status:true,
                data:add
            }
            //validation
        }catch(error){
            console.log("createUser user module error", error)
            return{
                status: false,
                error:error.message
            }
        }
    }
}
module.exports= new _user()