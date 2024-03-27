const UserRoute=require('./User')
const HomesRoute=require('./Home')
const LogRoute=require('./Log')

function routes(app){
   app.use('/Signin',UserRoute)
   app.use('/home',HomesRoute)
   app.use('/',LogRoute)
   
   
}
module.exports=routes

