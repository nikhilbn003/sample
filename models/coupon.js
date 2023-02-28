import mongoose from "mongoose";

 const couponSchema = new mongoose.Schema({
   couponid:{
      type:String,
      required:true
   } 
 })


 module.exports = mongoose.models.Coupon || mongoose.model('Coupon',couponSchema)