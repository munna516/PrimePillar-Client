import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Loading from "../../../Components/Shared/Loading";
import Space from "../../../Components/Space/Space";
import { Helmet } from "react-helmet";

const Announcement = () => {
  const axiosPublic = useAxiosPublic();
  const { data: announcements = [], isLoading } = useQuery({
    queryKey: ["announcement"],
    queryFn: async () => {
      const { data } = await axiosPublic("/announcements");
      return data;
    },
  });
  if (isLoading) return <Loading></Loading>;
  return (
    <div>
      <Helmet>
        <title>Dashboard | Announcement</title>
      </Helmet>
      <h1 className="text-center font-bold text-dark-blue text-xl md:text-2xl lg:text-3xl">
        All Announcements
      </h1>
      <Space></Space>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className="p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition"
          >
            <h2 className="text-lg font-semibold mb-2 text-dark-blue">
              {announcement.title}
            </h2>
            <p className="text-gray-700 mb-4">{announcement.description}</p>
            <p className="text-sm text-gray-400 italic">
              Posted on: {announcement.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcement;
