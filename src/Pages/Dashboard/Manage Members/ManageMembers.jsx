import toast from "react-hot-toast";
import Loading from "../../../Components/Shared/Loading";
import NoData from "../../../Components/Shared/NoData";
import Space from "../../../Components/Space/Space";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const ManageMembers = () => {
  const axiosPrivate = useAxiosPrivate();
  const {
    data: members = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["member"],
    queryFn: async () => {
      const { data } = await axiosPrivate("/members");
      return data;
    },
  });
  const handleRemove = async (email, name) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await axiosPrivate.patch("/remove-members", { email });
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `The member has been changed to User`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        } else {
          toast.error("Not updated Successfully");
        }
      }
    });
  };
  if (isLoading) return <Loading></Loading>;
  return (
    <div>
       <Helmet>
        <title>Admin Dashboard | Manage Members</title>
      </Helmet>
      <h1 className="text-center font-bold text-dark-blue text-xl md:text-2xl lg:text-3xl">
        Manage Members
      </h1>
      <Space></Space>
      <div>
        {members.length > 0 ? (
          <table className="table">
            {/* head */}
            <thead className="border-b-2">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Eamil</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, idx) => (
                <tr key={member._id}>
                  <th className="border-b-2">{idx + 1}</th>
                  <td className="border-b-2">{member.name}</td>
                  <td className="border-b-2">{member.email}</td>
                  <td className="border-b-2">
                    <button
                      onClick={() => handleRemove(member.email, member.name)}
                      className="btn btn-sm bg-red-500 text-white hover:bg-red-500"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <NoData text={"Members"}></NoData>
        )}
      </div>
      <Space></Space>
    </div>
  );
};

export default ManageMembers;
