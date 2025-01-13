import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <div className="container mx-auto bg-[#1E3A8A]">
        <Navbar></Navbar>
      </div>
      <div className="flex-grow container mx-auto">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
