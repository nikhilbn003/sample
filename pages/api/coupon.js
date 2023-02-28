// import { Await } from "react-router-dom";
// import { initMongoose } from "../../lib/mongoose";
// import couponDetails from "../../models/coupon";


// export async function  findCoupons(){
//     return   couponDetails.find();
//  }

//  export default async function handler(req,res){
//     await initMongoose();
//     const{couponid} = req.body();
//    const coupon = await couponDetails.findOne({couponid});

//    if(coupon){
//     res.status(200).json({ exists: true });
//    } else {
//     res.status({status: 'no coupons .' });
//    }
//  }


 import connect from '../../lib/mongoose';
import  Coupon from '../../models/coupon';

connect()

export default async function handle(req,res){
    const{email, password } = req.body
    const coupon = await Coupon.findOne({email,password})
    if(!coupon){
        return res.json({status:'not able to find coupon'})
    }
    else{
        res.redirect('/checkout')
    }

}

