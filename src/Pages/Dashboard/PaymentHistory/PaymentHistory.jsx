import { useQuery } from "@tanstack/react-query";
import Space from "../../../Components/Space/Space";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";
import useAuth from "../../../Hooks/useAuth";
import Loading from "../../../Components/Shared/Loading";
import NoData from "../../../Components/Shared/NoData";
import moment from "moment";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const { data: payments = [], isLoading } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const { data } = await axiosPrivate(`/payment-history/${user?.email}`);
      return data;
    },
  });
  if (isLoading) return <Loading></Loading>;
  return (
    <div>
      <h1 className="text-center font-bold text-dark-blue text-xl md:text-2xl lg:text-3xl">
        Payment History
      </h1>
      <Space></Space>
      <div>
        {payments.length > 0 ? (
          <table className="table">
            {/* head */}
            <thead className="border-b-2">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Month</th>
                <th>Amount</th>
                <th>Payment Date</th>
                <th>Transaction Id</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, idx) => (
                <tr className="lg:text-lg" key={payment._id}>
                  <th className="border-b-2">{idx + 1}</th>
                  <td className="border-b-2">{payment?.name}</td>
                  <td className="border-b-2">{payment?.month}</td>
                  <td className="border-b-2">${payment?.amount}</td>
                  <td className="border-b-2">
                    {" "}
                    {moment(payment?.paymentDate).format("DD-MM-YYYY")}
                  </td>
                  <td className="border-b-2">{payment?.transactionId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <NoData text={"Payment"}></NoData>
        )}
      </div>
    </div>
  );
};

export default PaymentHistory;
