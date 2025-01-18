import { FaEnvelope, FaUser } from "react-icons/fa";
import Space from "../../../Components/Space/Space";
import useAuth from "../../../Hooks/useAuth";
import useRole from "../../../Hooks/useRole";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Components/Shared/Loading";
import { Helmet } from "react-helmet";

const AdminProfile = () => {
  const { user } = useAuth();
  const [role] = useRole();
  const axiosPrivate = useAxiosPrivate();
  const {
    data: admin = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["admin"],
    queryFn: async () => {
      const { data } = await axiosPrivate("/admin-profile");
      return data;
    },
  });

  if (isLoading) return <Loading></Loading>;

  return (
    <div>
      <Helmet>
        <title>Admin Dashboard | Profile</title>
      </Helmet>
      <h1 className="text-center font-bold text-dark-blue text-xl md:text-2xl lg:text-3xl">
        Admin Profile
      </h1>
      <Space></Space>
      <div className="avatar flex justify-center items-center">
        <div className="ring-primary ring-offset-base-100 md:w-24 lg:w-36 rounded-full ring ring-offset-2">
          <img src={user?.photoURL} />
        </div>
        <span className="absolute -bottom-4 bg-green-500 px-4 font-bold py-1 rounded-xl text-white">
          {role}
        </span>
      </div>
      <Space></Space>
      <div className="lg:flex items-center justify-center gap-10">
        <h1 className="flex items-center gap-2 text-xl font-semibold">
          <FaUser></FaUser> {user?.displayName}
        </h1>
        <h1 className="text-xl flex items-center gap-2 font-semibold">
          <FaEnvelope></FaEnvelope> {user?.email}
        </h1>
      </div>
      <Space></Space>
      <div className="grid grid-cols-2  lg:grid-cols-4 gap-4">
        <div className="bg-dark-blue p-3 flex flex-col items-center gap-3 rounded-lg">
          <h1 className="md:text-xl font-semibold text-white">Total Room</h1>
          <p className="md:text-lg font-semibold text-white">
            {admin?.totalRoom}
          </p>
        </div>
        <div className="bg-dark-blue p-3 flex flex-col items-center gap-3 rounded-lg">
          <h1 className="md:text-xl font-semibold text-white">
            Available Room
          </h1>
          <p className="md:text-lg font-semibold text-white">
            {(admin?.availableRoom / admin?.totalRoom) * 100}%
          </p>
        </div>
        <div className="bg-dark-blue p-3 flex flex-col items-center gap-3 rounded-lg">
          <h1 className="md:text-xl font-semibold text-white">
            Unavailable Room
          </h1>
          <p className="md:text-lg font-semibold text-white">
            {100 - (admin?.availableRoom / admin?.totalRoom) * 100}%
          </p>
        </div>
        <div className="bg-dark-blue p-3 flex flex-col items-center gap-3 rounded-lg">
          <h1 className="md:text-xl font-semibold text-white">Total User</h1>
          <p className="md:text-lg font-semibold text-white">
            {admin?.totalUser}
          </p>
        </div>
        <div className="bg-dark-blue p-3 flex flex-col items-center gap-3 rounded-lg">
          <h1 className="md:text-xl font-semibold text-white">Total Members</h1>
          <p className="md:text-lg font-semibold text-white">
            {admin?.totalMember}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
