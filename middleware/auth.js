

const isLogin=async(req,res,next)=>{

    try{
        // res.send(req.session);
        if(req.session.user_id)
        {
            return next();
           
            
        }
        else
        {
            console.log('Please log in to continue');
            res.redirect('/login');
          
        }
       

    }
    catch(error)
    {
        console.log(error.message);
    }

}



const isLogout=async(req,res,next)=>{

    try{
            // res.send(req.session);

        if(!req.session.user_id)
        {
            // res.send('jjj');
        //    res.redirect('/dashboard');
        next();

        }
        else
        {
            res.redirect('/dashboard');
            
        }
      
    }
    catch(error)
    {
        console.log(error.message);
    }

    
}

module.exports={isLogin,isLogout}