const m$user = require('../modules/user.module')
const {Router}= require('express')
const response =require('../helpers/response')
const userController= Router()
//GET
//POST
//PUT
/**
* @param {string} name,
* @param {string} email,
* @param {string} password,
*/
userController.post('/', async (req, res)=>{
    const add= await m$user.createUser(req.body)
    response.sendResponse(res, add)
})
//DELETE
module.exports=userController