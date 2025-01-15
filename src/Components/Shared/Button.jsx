import React from "react";

const Button = ({ text, center, full }) => {
  if (full) {
    return (
      <button className="bg-dark-blue rounded-lg py-3  text-white font-bold hover:bg-blue-900/95">
        {text}
      </button>
    );
  }
  if (center) {
    return (
      <button className="bg-dark-blue rounded-lg py-3 w-32 mx-auto text-white font-bold hover:bg-blue-900/90">
        {text}
      </button>
    );
  }
};

export default Button;
