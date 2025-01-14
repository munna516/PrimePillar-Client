import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet";
import ApartmentCard from "../../Components/ApartmentCard/ApartmentCard";
import Space from "../../Components/Space/Space";
import { useState } from "react";
import Loading from "../../Components/Shared/Loading";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Apartment = () => {
  const axiosPublic = useAxiosPublic();

  const { data: apartments = [], isLoading } = useQuery({
    queryKey: ["apartments"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/apartments`);
      return data;
    },
  });

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const totalPages = Math.ceil(apartments.length / cardsPerPage);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = (apartments || []).slice(
    indexOfFirstCard,
    indexOfLastCard
  );

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };
  if (isLoading) {
    return <Loading></Loading>;
  }
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
          {currentCards.map((apartment) => (
            <ApartmentCard
              key={apartment._id}
              apartment={apartment}
            ></ApartmentCard>
          ))}
        </div>
        <Space></Space>
        <div className="flex justify-center items-center mt-6 space-x-4">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`p-3 bg-dark-blue text-white rounded-lg ${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-300"
            }`}
          >
            Previous
          </button>

          <span className="text-lg font-medium">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`p-3 bg-dark-blue text-white rounded-lg ${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-300"
            }`}
          >
            Next
          </button>
        </div>
      </div>
      <Space></Space>
    </>
  );
};

export default Apartment;
