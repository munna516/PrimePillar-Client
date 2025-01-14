import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet";
import ApartmentCard from "../../Components/ApartmentCard/ApartmentCard";
import Space from "../../Components/Space/Space";

const Apartment = () => {
  const { data: apartments = [], isLoading } = useQuery({
    queryKey: ["apartments"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API}/apartments`
      );
      return data;
    },
  });

  return (
    <>
      <Helmet>
        <title>PrimePillar | Apartment</title>
      </Helmet>
      <div className="mt-32">
        <div className="flex items-center justify-between">
          <h1 className="text-xl md:text-2xl lg:text-4xl text-dark-blue font-bold">
            Find Your Next Home
          </h1>
          <p>Search Functionality</p>
        </div>
        <Space></Space>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apartments.map((apartment) => (
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

export default Apartment;
