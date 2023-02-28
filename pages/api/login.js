import connect from '../../lib/mongoose';
import  User from '../../models/login';

connect()

export default async function handle(req,res){
    const{email, password } = req.body
    const user = await User.findOne({email,password})
    if(!user){
        return res.json({status:'not able to find user .'})
    }
    else{
        res.redirect('/checkout')
    }

}
