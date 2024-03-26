const express=require("express")
const route=express.Router()

const SignController=require('../Controller/SignController')

route.get('/',SignController.SignIn)
route.post('/data',SignController.User)


module.exports=route