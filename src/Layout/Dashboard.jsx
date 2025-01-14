import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Shared/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Dashboard Sidebar */}
      <div className=" bg-dark-blue min-h-screen w-20 md:w-72">
        <Sidebar></Sidebar>
      </div>
      {/* Content */}
      <div className="flex-1 ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
