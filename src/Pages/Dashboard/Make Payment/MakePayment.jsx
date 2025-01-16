import React from "react";
import Space from "../../../Components/Space/Space";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Components/Shared/Loading";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const MakePayment = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const { data: profile = [], isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const { data } = await axiosPrivate(`/agreement/${user?.email}`);
      return data;
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const month = parseInt(e.target.month.value);
    const rent = e.target.rent.value
    if (month === 0) {
      return toast.error("Select the month first");
    }
    navigate(`/dashboard/payment/${month}/${rent}`);
  };
  if (isLoading) return <Loading></Loading>;
  return (
    <div>
      <h1 className="text-center font-bold text-dark-blue text-xl md:text-2xl lg:text-3xl">
        Make Payment
      </h1>
      <Space></Space>
      <div className=" rounded-lg">
        <form onSubmit={handleSubmit}>
          {/* First Row Name and email and floor */}
          <div className=" md:flex gap-5 space-y-5 md:space-y-0 mb-6">
            <div className="w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">Email</span>
                </div>
                <input
                  type="email"
                  name="email"
                  readOnly
                  defaultValue={profile?.email}
                  placeholder="email"
                  className="input input-bordered "
                />
              </label>
            </div>
            <div className="w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">
                    Apartment No.
                  </span>
                </div>
                <input
                  type="text"
                  name="apartment"
                  readOnly
                  defaultValue={profile?.apartmentNum}
                  placeholder="apartment"
                  className="input input-bordered "
                  required
                />
              </label>
            </div>
            <div className="w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">Floor</span>
                </div>
                <input
                  type="text"
                  name="floor"
                  placeholder="floor"
                  readOnly
                  defaultValue={profile?.floor}
                  className="input input-bordered "
                  required
                />
              </label>
            </div>
          </div>

          {/* Second Row Block , rent & month */}
          <div className="md:flex gap-5 space-y-5 md:space-y-0 mb-8">
            <div className="w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">Block</span>
                </div>
                <input
                  type="text"
                  name="block"
                  readOnly
                  placeholder="block"
                  defaultValue={profile?.block}
                  className="input input-bordered "
                  required
                />
              </label>
            </div>
            <div className="w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">Rent</span>
                </div>
                <input
                  type="text"
                  name="rent"
                  readOnly
                  placeholder="rent"
                  defaultValue={profile?.rent}
                  className="input input-bordered "
                  required
                />
              </label>
            </div>
            <div className="w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">Select Month</span>
                </div>
                <select
                  name="month"
                  className="select select-bordered text-base"
                >
                  <option value={0} disabled selected>
                    Select Month
                  </option>
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                  <option value="4">April</option>
                  <option value="5">May</option>
                  <option value="6">June</option>
                  <option value="7">July</option>
                  <option value="8">August</option>
                  <option value="9">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
              </label>
            </div>
          </div>
          <div className="flex justify-center">
            <input
              type="submit"
              className="btn bg-dark-blue w-20 hover:bg-white hover:text-black  text-white font-bold"
              value="Pay"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default MakePayment;
