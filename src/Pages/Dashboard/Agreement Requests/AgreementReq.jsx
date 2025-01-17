import { useQuery } from "@tanstack/react-query";
import Space from "../../../Components/Space/Space";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";
import Loading from "../../../Components/Shared/Loading";
import moment from "moment";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import NoData from "../../../Components/Shared/NoData";

const AgreementReq = () => {
  const axiosPrivate = useAxiosPrivate();
  const {
    data: agreements = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["agreement"],
    queryFn: async () => {
      const { data } = await axiosPrivate("/agreements");
      return data;
    },
  });
  const handleAction = async (id, action) => {
    const message = { id, action };
    if (action === "accept") {
      const { data } = await axiosPrivate.post(
        `/manage-agreement-request`,
        message
      );
      console.log(data);
      if (data.modifiedCount > 0) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Agreement Accepted`,
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Reject it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const { data } = await axiosPrivate.post(
            `/manage-agreement-request`,
            message
          );
          console.log(data);
          if (data?.message) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: `Agreement Rejected`,
              showConfirmButton: false,
              timer: 1500,
            });
            refetch();
          }
        }
      });
    }
  };
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="text-center font-bold text-dark-blue text-xl md:text-2xl lg:text-3xl">
        Agreements Requests
      </h1>
      <Space></Space>
      <div>
        <div className="overflow-x-auto">
          {agreements.length > 0 ? (
            <table className="table">
              {/* head */}
              <thead className="border-b-2">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Eamil</th>
                  <th>Floor</th>
                  <th>Block</th>
                  <th>Apt No.</th>
                  <th>Rent</th>
                  <th>Req Date</th>
                  <th>Accept</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {agreements.map((agreement, idx) => (
                  <tr key={agreement._id}>
                    <th className="border-b-2">{idx + 1}</th>
                    <td className="border-b-2">{agreement.name}</td>
                    <td className="border-b-2">{agreement.email}</td>
                    <td className="border-b-2">{agreement.floor}</td>
                    <td className="border-b-2">{agreement.block}</td>
                    <td className="border-b-2">{agreement.apartmentNum}</td>
                    <td className="border-b-2">${agreement.rent}</td>
                    <td className="border-b-2">
                      {moment(agreement.requestDate).format("DD-MM-YYYY")}
                    </td>
                    <td className="border-b-2">
                      <button
                        onClick={() => handleAction(agreement._id, "accept")}
                        className="btn btn-sm bg-dark-blue text-white"
                      >
                        Accept
                      </button>
                    </td>
                    <td className="border-b-2">
                      <button
                        onClick={() => handleAction(agreement._id, "reject")}
                        className="btn btn-sm bg-red-500 text-white"
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <NoData text={"Agreement Request"}></NoData>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgreementReq;
