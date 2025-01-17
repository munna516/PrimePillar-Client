import { useQuery } from "@tanstack/react-query";
import Space from "../../../Components/Space/Space";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";
import CouponDialog from "./CouponDialog";
import NoData from "../../../Components/Shared/NoData";
import Loading from "../../../Components/Shared/Loading";

const ManageCoupons = () => {
  const axiosPrivate = useAxiosPrivate();
  const {
    data: coupons = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["coupons"],
    queryFn: async () => {
      const { data } = await axiosPrivate("/coupons");
      return data;
    },
  });
  if (isLoading) return <Loading></Loading>;
  return (
    <div>
      <div className="flex justify-around items-center">
        <div></div>
        <h1 className="text-center font-bold text-dark-blue text-xl md:text-2xl lg:text-3xl">
          Coupons
        </h1>
        <CouponDialog refetch={refetch}></CouponDialog>
      </div>
      <Space></Space>
      <div>
        {coupons.length > 0 ? (
          <table className="table">
            {/* head */}
            <thead className="border-b-2">
              <tr>
                <th>#</th>
                <th>Code</th>
                <th>Discount Percentage</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {coupons.map((coupon, idx) => (
                <tr key={coupon._id}>
                  <th className="border-b-2">{idx + 1}</th>
                  <td className="border-b-2">{coupon.code}</td>
                  <td className="border-b-2">{coupon.discount}%</td>
                  <td className="border-b-2">{coupon.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <NoData text="Coupon"></NoData>
        )}
      </div>
    </div>
  );
};

export default ManageCoupons;
