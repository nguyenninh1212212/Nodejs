const express=require("express")
const route=express.Router()

const LogController=require('../Controller/LogController')

route.get('/',LogController.LogIn)
route.get('/ChangePass',LogController.ChangePass)
route.post('/LogData',LogController.LogF)
route.put('/Change',LogController.getData)


module.exports=route