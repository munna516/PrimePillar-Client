import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Shared/Sidebar";
import DashboardNav from "../Components/Shared/DashboardNav";

const Dashboard = () => {
  const role = "admin";
  return (
    <>
      <div className="flex">
        {/* Dashboard Sidebar */}
        <div className=" bg-dark-blue min-h-screen w-20 md:w-72 border-r-2 border-gray-400">
          <Sidebar role={role}></Sidebar>
        </div>
        <div className="grow bg-base-200">
          <DashboardNav role={role}></DashboardNav>
          {/* Content */}
          <div className="p-5 md:p-10">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
