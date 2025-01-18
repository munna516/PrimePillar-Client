import React from 'react';

const Marker = ({text}) => {
    return (
        <div className="bg-red-600 text-white font-bold rounded-full h-8 text-xl w-8 flex items-center justify-center shadow-md">
        {text}
      </div>
    );
};

export default Marker;