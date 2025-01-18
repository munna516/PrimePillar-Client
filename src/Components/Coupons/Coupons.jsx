import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import Space from "../Space/Space";
import Loading from "../Shared/Loading";
import Marquee from "react-fast-marquee";
import toast from "react-hot-toast";

const Coupons = () => {
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
  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    toast.success("Code is Copied");
  };
  if (isLoading) return <Loading></Loading>;
  return (
    <div>
      <h1 className="text-center font-bold text-dark-blue text-xl md:text-2xl lg:text-4xl">
        Exclusive Deals & Coupons
      </h1>
      <Space></Space>
      <Marquee pauseOnHover="true" speed={100}>
        <div className="flex items-center justify-center gap-10 px-4 md:px-6 ">
          {coupons.map((coupon) => (
            <div
              key={coupon._id}
              className=" card  bg-gradient-to-r from-dark-blue to-blue-500 rounded-lg p-4 text-center  w-96 h-44"
            >
              <h3 className="text-2xl font-bold text-white">{coupon.code}</h3>
              <p className="text-white/80 mt-2">{coupon.description}</p>

              <button
                className="mt-4 font-bold text-sm bg-white hover:bg-white text-dark-blue  py-2 px-4 rounded-lg mx-auto"
                onClick={() => handleCopyCode(coupon.code)}
              >
                Copy Code
              </button>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Coupons;
