import React from "react";
import { Link } from "react-router-dom";
const ApartmentCard = ({ apartment }) => {
  const { apartmentImg, block, floor, rent, apartmentNum } = apartment || {};
  return (
    <div className="card card-compact bg-base-100 border-2">
      <figure className="p-2">
        <img
          className="rounded-xl w-full h-72"
          src={apartmentImg}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="lg:text-lg">
          Floor <span className="font-bold">{floor}</span>, Block{" "}
          <span className="font-bold">{block}</span>, Apartment No{" "}
          <span className="font-bold">{apartmentNum}</span>{" "}
        </h2>
        <h2 className="md:text-lg">
          Price : <span className="font-bold">${rent}</span>
        </h2>
        <div className="card-actions justify-end">
          <Link className="p-4 border-2 font-semibold border-dark-blue bg-dark-blue rounded-lg hover:text-black hover:bg-white  text-white">
            Agreement
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;
