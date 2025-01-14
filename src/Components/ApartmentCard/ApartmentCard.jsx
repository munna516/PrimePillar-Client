import React from "react";
const ApartmentCard = ({ apartment }) => {
  const { apartmentImg, block, floor, rent, apartmentNum } = apartment || {};
  return (
    <div className="card bg-base-100 border-2">
      <figure className="p-2">
        <img
          className="rounded-xl w-full h-72"
          src={apartmentImg}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline hover:bg-dark-blue hover:border-0">Agreement</button>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;
