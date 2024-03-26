const UserRoute=require('./User')
function routes(app){
   app.get('/',(req,res)=>{
    res.render('Login')
   })
   app.use('/Signin',UserRoute)
   
}
module.exports=routes

