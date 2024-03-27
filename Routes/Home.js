const express=require('express')
const routes=express.Router()

const HomeController=require('../Controller/HomeController')
routes.get('/',HomeController.Home)
routes.delete('/deleteDt',HomeController.DeleteDT)

module.exports= routes