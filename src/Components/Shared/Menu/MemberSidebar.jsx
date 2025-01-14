import { NavLink } from "react-router-dom";
import { FaBullhorn, FaUser } from "react-icons/fa";
import { FaCreditCard, FaFileInvoiceDollar } from "react-icons/fa";
const MemberSidebar = () => {
    return  <>
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
      <NavLink
        to="/dashboard/make-payment"
        className={({ isActive }) =>
          `flex items-center py-2 px-3 space-x-4   border-2 rounded-lg ${
            isActive ? "bg-white text-black" : ""
          }`
        }
      >
        <FaCreditCard />
        <span className="hidden md:inline">Make Payment</span>
      </NavLink>
      <NavLink
        to="/dashboard/payment-history"
        className={({ isActive }) =>
          `flex items-center py-2 px-3 space-x-4   border-2 rounded-lg ${
            isActive ? "bg-white text-black" : ""
          }`
        }
      >
        <FaFileInvoiceDollar/>
        <span className="hidden md:inline">Payment History</span>
      </NavLink>
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
    </>
};

export default MemberSidebar;