import React, { useState } from "react";
import Space from "../../../Components/Space/Space";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import toast from "react-hot-toast";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
const Payment = () => {
  const axiosPrivate = useAxiosPrivate();
  const { month, rent } = useParams();
  const [disabled, setDisabled] = useState(false);
  const [price, setPrice] = useState(parseInt(rent));
  const handleSubmit = async (e) => {
    e.preventDefault();
    const coupon = e.target.coupon.value;
    const { data } = await axiosPrivate.post("/validate-coupons", { coupon });
    if (data?.code === coupon) {
      const newPrice = price - (price * (parseInt(data?.discount) / 100));
      setPrice(newPrice);
      toast.success(`Congratutaion you get ${data?.discount}% off`);
      e.target.reset()
      setDisabled(true);
    } else {
      toast.error(data?.message);
    }
  };
  return (
    <div>
      <h1 className="text-center font-bold text-dark-blue text-xl md:text-2xl lg:text-3xl">
        Complete Your Payment
      </h1>
      <Space></Space>
      <div className="lg:flex text-center items-center justify-around ">
        <h1 className="text-2xl">
          Total Rent: <span className="font-bold ">${price}</span>
        </h1>
        <div className="flex justify-center mt-5 lg:mt-0 ">
          <form onSubmit={handleSubmit} className="flex gap-5">
            <input name="coupon" className="input input-bordered" type="text" />
            <input
              disabled={disabled}
              className="btn bg-dark-blue text-white"
              placeholder="apply your coupons"
              type="submit"
              value="Apply Coupons"
            />
          </form>
        </div>
      </div>
      <Space></Space>
      <div className="lg:px-44 mt-16">
        <Elements stripe={stripePromise}>
          <CheckoutForm month={month} rent={price}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
