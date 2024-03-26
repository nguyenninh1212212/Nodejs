const mongoose=require('mongoose')
const Schema=mongoose.Schema

const Login=new Schema({
     id :{type:String},
     user :{type:String},
     pass :{type:String}
},{
     timestamps:true
})

module.exports=mongoose.model('login01',Login)


