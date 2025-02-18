import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loading from "../Shared/Loading";

const Reviews = () => {
  const axiosPublic = useAxiosPublic();
  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ["all-reviews"],
    queryFn: async () => {
      const { data } = await axiosPublic("/reviews");
      return data;
    },
  });

  if (isLoading) return <Loading />;
  return (
    <div className="">
        <h1 className="text-xl md:text-2xl lg:text-4xl text-center  ld:mb-0 text-dark-blue font-bold mb-10">
            Review From Our Residents
          </h1>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`md:flex md:flex-row border-2 border-gray-200  rounded-lg shadow-xl items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } gap-6`}
          >
            <div className="flex-shrink-0 p-5 w-full md:w-1/3">
              <img
                src={review.imgLink}
                alt={review.name}
                className="w-full md:w-[250px]  h-[300px] md:h-[200px] rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-2/3 text-center p-5 md:text-left">
              <h3 className="text-2xl font-semibold text-dark-blue mb-2">
                {review.name}
              </h3>
              <p className="text-sm text-gray-500 mb-4">Post date : {review.date}</p>
              <p className="text-gray-400">{review.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
