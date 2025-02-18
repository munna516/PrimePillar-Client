import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Shared/Sidebar";
import DashboardNav from "../Components/Shared/DashboardNav";
import useRole from "../Hooks/useRole";

const Dashboard = () => {
  const [role] = useRole();
  return (
    <>
      <div className="flex">
        {/* Dashboard Sidebar */}
        <div className=" bg-dark-blue min-h-screen w-20 md:w-72 fixed border-r-2 border-gray-400 z-50">
          <Sidebar role={role}></Sidebar>
        </div>
        <div className="grow bg-base-200 min-h-screen">
          <DashboardNav role={role}></DashboardNav>
          {/* Content */}
          <div className="ml-20 md:ml-72 p-5 md:p-10 ">
            <Outlet>
              
            </Outlet>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
