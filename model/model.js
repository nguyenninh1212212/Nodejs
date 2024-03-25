const mongoose=require('mongoose')
const Schema=mongoose.Schema

const Login=new mongoose.Schema({
     id:{type:String},
     user:{type:String},
     pass:{type:String}
})

module.exports=mongoose.model('Login',Login)


