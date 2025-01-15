import { NavLink } from "react-router-dom";
import {
  FaBullhorn,
  FaFileContract,
  FaTags,
  FaUser,
  FaUserCog,
} from "react-icons/fa";

const AdminSidebar = () => {
  return (
    <>
      <NavLink
        to="/dashboard/admin-profile"
        className={({ isActive }) =>
          `flex items-center py-2 px-3 space-x-4 border-2 rounded-lg ${
            isActive ? "bg-white text-black" : ""
          }`
        }
      >
        <FaUser />
        <span className="hidden md:inline">Admin Profile</span>
      </NavLink>

      <NavLink
        to="/dashboard/manage-members"
        className={({ isActive }) =>
          `flex items-center py-2 px-3 space-x-4 border-2 rounded-lg ${
            isActive ? "bg-white text-black" : ""
          }`
        }
      >
        <FaUserCog />
        <span className="hidden md:inline">Manage Members</span>
      </NavLink>
      <NavLink
        to="/dashboard/agreement-requests"
        className={({ isActive }) =>
          `flex items-center py-2 px-3 space-x-4 border-2 rounded-lg ${
            isActive ? "bg-white text-black" : ""
          }`
        }
      >
        <FaFileContract />
        <span className="hidden md:inline">Agreement Requests</span>
      </NavLink>
      <NavLink
        to="/dashboard/manage-coupons"
        className={({ isActive }) =>
          `flex items-center py-2 px-3 space-x-4 border-2 rounded-lg ${
            isActive ? "bg-white text-black" : ""
          }`
        }
      >
        <FaTags />
        <span className="hidden md:inline">Manage Coupons</span>
      </NavLink>
      <NavLink
        to="/dashboard/make-announcement"
        className={({ isActive }) =>
          `flex items-center py-2 px-3 space-x-4  border-2 rounded-lg ${
            isActive ? "bg-white text-black" : ""
          }`
        }
      >
        <FaBullhorn />
        <span className="hidden md:inline">Make Announcement</span>
      </NavLink>
    </>
  );
};

export default AdminSidebar;
