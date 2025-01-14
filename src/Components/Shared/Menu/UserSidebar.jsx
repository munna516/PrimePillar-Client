import { NavLink } from "react-router-dom";
import { FaBullhorn, FaUser } from "react-icons/fa";

const UserSidebar = () => {
  return (
    <>
      <NavLink
        to="/dashboard/announcements"
        className={({ isActive }) =>
          `flex items-center py-2 px-3 space-x-4   border-2 rounded-lg ${
            isActive ? "bg-white text-black" : ""
          }`
        }
      >
        <FaBullhorn  />

        <span className="hidden md:inline">Announcement</span>
      </NavLink>
      <NavLink
        to="/dashboard/my-profile"
        className={({ isActive }) =>
          `flex items-center py-2 px-3 space-x-4  border-2 rounded-lg ${
            isActive ? "bg-white text-black" : ""
          }`
        }
      >
      <FaUser />
        <span className="hidden md:inline">My Profile</span>
      </NavLink>
    </>
  );
};

export default UserSidebar;
