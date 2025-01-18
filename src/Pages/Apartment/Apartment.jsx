import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import ApartmentCard from "../../Components/ApartmentCard/ApartmentCard";
import Space from "../../Components/Space/Space";
import { useState } from "react";
import Loading from "../../Components/Shared/Loading";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Apartment = () => {
  const axiosPublic = useAxiosPublic();
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [allApartments, setAllApartments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const cardsPerPage = 6;
  const { data, isLoading } = useQuery({
    queryKey: ["apartments"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/apartments`);
      setAllApartments(data);
      return data;
    },
  });

  // Calculate pagination
  const totalPages = Math.ceil(allApartments.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = allApartments.slice(indexOfFirstCard, indexOfLastCard);

  const handleSearch = async () => {
    try {
      const { data } = await axiosPublic(
        `/apartments-price?minPrice=${minPrice}&maxPrice=${maxPrice}`
      );
      setAllApartments(data);
      setCurrentPage(1); 
    } catch (error) {
      console.error("Error fetching apartments:", error);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Helmet>
        <title>PrimePillar | Apartment</title>
      </Helmet>
      <div className="mt-32">
        <div className="lg:flex items-center justify-between">
          <h1 className="text-xl md:text-2xl lg:text-4xl text-center mb-5 ld:mb-0 text-dark-blue font-bold">
            Find Your Next Home
          </h1>
          <div className="flex justify-center space-x-2">
            <input
              type="number"
              placeholder="Min Price"
              required
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="border border-dark-blue rounded p-2"
            />
            <input
              type="number"
              placeholder="Max Price"
              required
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="border rounded p-2 border-dark-blue"
            />
            <button
              onClick={handleSearch}
              className="bg-dark-blue text-white rounded-lg p-2"
            >
              Search
            </button>
          </div>
        </div>
        <Space />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCards.map((apartment) => (
            <ApartmentCard
              key={apartment._id}
              apartment={apartment}
            ></ApartmentCard>
          ))}
        </div>
        <Space />
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
      <Space />
    </>
  );
};

export default Apartment;
