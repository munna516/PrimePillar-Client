import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className=" mx-auto bg-[#1E3A8A] fixed z-50 top-0 w-full px-2 md:px-3 lg:px-4">
        <Navbar></Navbar>
      </div>
      <div className="flex-grow container mx-auto px-2 md:px-3 lg:px-4">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
