import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loading from "../Shared/Loading";
import ApartmentCard from "../ApartmentCard/ApartmentCard";
import Space from "../Space/Space";

const FeaturedApartment = () => {
  const axiosPublic = useAxiosPublic();
  const { data, isLoading } = useQuery({
    queryKey: ["featured-apartments"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/featured-apartments`);
      console.log(data);
      return data;
    },
  });
  if (isLoading) return <Loading />;
  return (
    <>
      <div>
        <h1 className="text-center font-bold text-dark-blue text-xl md:text-2xl lg:text-4xl mb-5">
          Featured Apartments
        </h1>
        <Space/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((apartment) => (
            <ApartmentCard
              key={apartment._id}
              apartment={apartment}
            ></ApartmentCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedApartment;
