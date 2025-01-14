import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
const ApartmentCard = ({ apartment }) => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { apartmentImg, block, floor, rent, apartmentNum } = apartment || {};
  const handleAgreement = () => {
    if (!user && !user?.email) return navigate("/login");

    const agreementInfo = {
      name: user?.displayName,
      email: user?.email,

      floor,
      block,
      apartmentNum,
      rent,
      status: "Pending",
    };
    axiosPublic.post(`/agreements`, agreementInfo).then((res) => {
      if (res?.data?.insertedId) {
        toast.success(
          "Agreement is successful.Please wait for owner confirmation!!"
        );
      } else {
        toast.error(res?.data?.message, {
          position: "top-right",
        });
      }
    });
  };
  return (
    <div className="card card-compact bg-base-100 border-2">
      <figure className="p-2">
        <img
          className="rounded-xl w-full h-72"
          src={apartmentImg}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="lg:text-lg">
          Floor <span className="font-bold">{floor}</span>, Block{" "}
          <span className="font-bold">{block}</span>, Apartment No{" "}
          <span className="font-bold">{apartmentNum}</span>{" "}
        </h2>
        <h2 className="md:text-lg">
          Price : <span className="font-bold">${rent}</span>
        </h2>
        <div className="card-actions justify-end">
          <Link
            onClick={handleAgreement}
            className="p-4 border-2 font-semibold border-dark-blue bg-dark-blue rounded-lg hover:text-black hover:bg-white  text-white"
          >
            Agreement
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;
