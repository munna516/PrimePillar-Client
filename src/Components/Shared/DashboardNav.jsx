import React from "react";

const DashboardNav = ({ role }) => {
  return (
    <div className="bg-dark-blue text-white p-4 flex items-center justify-center border-b-2  border-gray-400">
      <h1 className="text-2xl font-bold">{role.charAt(0).toUpperCase() + role.slice(1)} Dashboard</h1>
    </div>
  );
};

export default DashboardNav;
