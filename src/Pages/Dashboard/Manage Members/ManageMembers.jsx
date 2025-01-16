import Loading from "../../../Components/Shared/Loading";
import Space from "../../../Components/Space/Space";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";

const ManageMembers = () => {
  const axiosPrivate = useAxiosPrivate();
//   const {
//     data: members = [],
//     isLoading,
//     refetch,
//   } = useQuery({
//     queryKey: ["agreement"],
//     queryFn: async () => {
//       const { data } = await axiosPrivate("/members");
//       return data;
//     },
//   });

//   if (isLoading) return <Loading></Loading>;
//   console.log(members);
  return (
    <div>
      <h1 className="text-center font-bold text-dark-blue text-xl md:text-2xl lg:text-3xl">
        Manage Members
      </h1>
      <Space></Space>
    </div>
  );
};

export default ManageMembers;
