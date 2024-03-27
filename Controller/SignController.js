const UserSign =require("../model/model");

class SignController{

    SignIn(req,res){
         res.render('Signin')
    }
    

    User(req,res){
        const data=req.body;
        const Login=new UserSign(data);
        Login.save()
        .then(()=>res.redirect('/'))
        .catch(err=>{
                 console.log(err);
        })
    }

    

}

module.exports = new SignController;