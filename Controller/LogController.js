const UserSign =require("../model/model");

class LogController{
   LogIn(req,res){
        res.render('Login')
   }
   async LogF(req,res){
    const { user, pass } = req.body;
    try{
        const userFromDB=await UserSign.findOne({user});
        if (!userFromDB || userFromDB.pass !== pass) {
            return res.render('Signin', { error: 'Invalid email or password' });
        }

        res.redirect('/home');
    }
    catch{
        console.error(error);
            res.status(500).send('Internal Server Error');
    }
}
    ChangePass(req,res){
        res.render('ChangePass')
    }

    async getData(req,res){
        const {user,pass} = req.body;
        try{
           const getDataFromDB=await UserSign.findOne({user});
           if(getDataFromDB){
            await UserSign.updateOne({user:user},{$set: { pass: pass }} )
            res.render('Login');
           }else{
            res.render('ChangePass',{err:"Invalid email or password"})
           }
        }
        catch{
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }
}
module.exports=new LogController;