/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Slide = ({ image, text }) => {
  return (
    <div
      className="w-full bg-center bg-no-repeat bg-cover min-h-[65vh]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex items-center justify-center w-full min-h-[65vh] bg-gray-900/70">
        <div className="text-center">
          <h1 className="text-xl w-10/12 lg:w-11/12 mx-auto font-semibold text-gray-300  lg:text-3xl">
            {text}
          </h1>
          <br />
          <Link
            to="/apartment"
            className="btn hover:text-dark-gray bg-dark-blue text-white text-lg"
          >
           Rent Your Dream Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slide;