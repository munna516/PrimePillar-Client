import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { TbFidgetSpinner } from "react-icons/tb";

const CheckoutForm = ({ month, rent }) => {
  const { user, loading } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  useEffect(() => {
    if (rent > 0) {
      axiosPrivate
        .post("/create-payment-intent", { price: rent })
        .then((res) => {
          setClientSecret(res?.data?.clientSecret);
        });
    }
  }, [rent, axiosPrivate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      toast.error(error?.message);
    } else {
    }

    // Confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user.displayName,
            email: user.email,
          },
        },
      });

    if (paymentIntent.status === "succeeded") {
      const monthName = moment()
        .month(month - 1)
        .format("MMMM-YYYY");
      const paymentInfo = {
        email: user?.email,
        name: user.displayName,
        transactionId: paymentIntent?.id,
        month: monthName,
        amount: rent,
        paymentDate: new Date(),
      };
      try {
        const { data } = await axiosPrivate.post("/payments", paymentInfo);
        if (data?.insertedId) {
          toast.success(
            `Payment Successfull. Your transaction id is ${paymentIntent?.id}`
          );
        }
      } catch (err) {
        toast.error(err?.message);
      } finally {
        navigate("/dashboard/payment-history");
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#000000",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn bg-dark-blue text-white mt-5 "
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        {loading ? (
          <TbFidgetSpinner className="animate-spin m-auto" />
        ) : (
          "Pay"
        )}
      </button>
    </form>
  );
};

export default CheckoutForm;
