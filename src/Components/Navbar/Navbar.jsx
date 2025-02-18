import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdLogin } from "react-icons/md";
import logo from "../../assets/Images/logo.png";
import avatarImage from "../../assets/Images/avatar.jpg";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { FiLogOut } from "react-icons/fi";
import toast from "react-hot-toast";
import useRole from "../../Hooks/useRole";
import Loading from "../Shared/Loading";
const Navbar = () => {
  const { user, userLogOut } = useAuth();
  const navigate = useNavigate();
 
 

  const handleLogOut = () => {
    userLogOut()
      .then(() => {
        toast.success("Logout Successfull", {
          position: "top-center",
        });
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.code);
      });

    navigate("/");
  };
  const [role, isLoading] = useRole();

  const navLinks = (
    <>
      <NavLink
        className={({ isActive }) =>
          `button md:text-lg lg:text-xl ${
            isActive ? "text-dark-gray bg-white" : ""
          }`
        }
        to="/"
      >
        <a>Home</a>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `button md:text-lg lg:text-xl ${
            isActive ? "text-dark-gray bg-white" : ""
          }`
        }
        to="/apartment"
      >
        <a>Apartment</a>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `button md:text-lg lg:text-xl ${
            isActive ? "text-dark-gray bg-white" : ""
          }`
        }
        to="/terms-condition"
      >
        <a>Terms Conditions</a>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `button md:text-lg lg:text-xl ${
            isActive ? "text-dark-gray bg-white" : ""
          }`
        }
        to="/contact"
      >
        <a>Contact</a>
      </NavLink>
    </>
  );
  if(isLoading) return <Loading></Loading>
  return (
    <>
      <div className="navbar container mx-auto h-24 text-white pr-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-dark-blue gap-3 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="flex items-center gap-2">
            <img className="w-8 md:w-10 lg:w-12" src={logo} alt="" />
            <h1 className="text-xl md:text-2xl lg:text-4xl font-extrabold ">
              PrimePillar
            </h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6">{navLinks}</ul>
        </div>
        <div className="navbar-end gap-4">
          {user && user?.email ? (
            <div className="flex justify-center items-center z-10 gap-3">
              {/* image  */}
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  className="border-2 border-white rounded-full "
                >
                  <img
                    className="w-12 rounded-full p-1"
                    referrerPolicy="no-referrer"
                    src={user && user?.photoURL ? user.photoURL : avatarImage}
                    alt=""
                  />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-dark-blue rounded-box z-[1] w-60 p-2 shadow"
                >
                  <li>
                    <a className="flex justify-center rounded-lg  md:text-lg font-semibold ">
                      {user?.displayName}
                    </a>
                  </li>
                  <li>
                    <Link
                      to={`/dashboard/${
                        role === "admin"
                          ? "admin-profile"
                          : role === "user"
                          ? "my-profiles"
                          : "my-profile"
                      }`}
                      className="flex justify-center rounded-lg hover:bg-white hover:text-dark-gray md:text-lg font-semibold"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <a
                      onClick={handleLogOut}
                      className="flex justify-center font-bold rounded-lg hover:bg-white hover:text-red-500 md:text-lg gap-2 "
                    >
                      Logout <FiLogOut />
                    </a>
                  </li>
                </ul>
              </div>
              {/* My Profile */}
            </div>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `button md:text-lg lg:text-xl ${
                  isActive ? "text-dark-gray bg-white" : ""
                }`
              }
            >
              Login <MdLogin />
            </NavLink>
          )}

          {/* Theme dark and light */}

         
        </div>
      </div>
    </>
  );
};

export default Navbar;
