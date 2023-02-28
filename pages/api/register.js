import connect from '../../lib/mongoose';
import  User from '../../models/login';

connect()

export default async function handle(req,res){
    try {
        const user = await User.create(req.body);
        res.redirect('/')
        if(!user){
            return res.json({code:'user not yet created'})
        }
    } catch (error) {
       res.status(400).json({status:'not able to create a new user .'}) 
    }
}
