import React from "react";

const NoData = ({ text }) => {
  return (
    <div>
      <h1 className="flex items-center justify-center text-lg text-red-600 lg:text-4xl font-bold mt-36">
        No {text} is Found !!
      </h1>
    </div>
  );
};

export default NoData;
