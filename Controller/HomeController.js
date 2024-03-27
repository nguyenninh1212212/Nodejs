const UserSign=require('../model/model')
class HomeController{
 async Home(req,res){
    try{
        const Users=(await UserSign.find({})).map(m=>m.toObject())
        return res.render('home',{Users})
    }
    catch{

    }
  }
  DeleteDT(req,res,next){
    UserSign.deleteOne({_id:req.body.id})
    .then(()=>res.redirect("/home"))
    .catch(next)
  }
}
module.exports=new HomeController