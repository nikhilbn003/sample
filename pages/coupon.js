import { useState } from "react";


function generateCouponCode() {
    const constantValue = "BH";
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let couponCode = constantValue;
    for (let i = 0; i < 6; i++) {
      couponCode += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return couponCode;
  }
  

function coupon() {
  const [coupons, setCoupons] = useState([]);

  function generateCoupons() {
    const newCoupons = [];
    for (let i = 0; i < 5000; i++) {
      const couponCode = generateCouponCode();
      newCoupons.push(couponCode);
    }
    setCoupons(newCoupons);
  }

  return (
    <div>
      <button className="bg-yellow-400 pl-3 pr-3 ml-4" onClick={generateCoupons}>Generate Coupons</button>
      <ul className="font-semibold ml-11">
        {coupons.map((coupon, index) => (
          <li key={index}>{coupon}</li>
        ))}
      </ul>
    </div>
  );
}

export default coupon;
