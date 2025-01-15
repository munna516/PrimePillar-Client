import { NavLink } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import UserSidebar from "./Menu/UserSidebar";
import MemberSidebar from "./Menu/MemberSidebar";
import AdminSidebar from "./Menu/AdminSidebar";

const Sidebar = ({ role }) => {
  return (
    <div className="bg-dark-blue text-white p-3">
      <h1 className="text-3xl font-bold hidden md:block mt-3 text-center">
        PrimePillar
      </h1>
      <ul className="flex flex-col mt-10 md:mt-7 gap-3 text-lg">
        {role === "user" && <UserSidebar></UserSidebar>}
        {role === "member" && <MemberSidebar></MemberSidebar>}
        {role === "admin" && <AdminSidebar></AdminSidebar>}
      </ul>
      <div className="divider  divider-secondary  my-10">or</div>
      <div className="text-xl">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center py-2 px-3 space-x-4  border-2 rounded-lg ${
              isActive ? "bg-white text-black" : ""
            }`
          }
        >
          <FaHome className="text-xl" />
          <span className="hidden md:inline">Back to Home</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
