import connect from '../../lib/mongoose';
import  User from '../../models/login';

connect()

// export default async function handle(req,res){
//     const{email, password } = req.body
//     const user = await User.findOne({email,password})
//     if(!user){
//         return res.json({status:'not able to find user .'})
//     }
//     else{
//         res.redirect('/checkout')
//     }

// }



import { connectToDatabase } from './connect';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const client = await connectToDatabase();
    const db = client.db();

    const result = await db.collection('messages').insertOne({
      name,
      email,
      message,
    });

    console.log(result);

    res.status(201).json({ message: 'Message sent!' });
  }
}
