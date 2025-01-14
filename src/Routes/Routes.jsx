import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Apartment from "../Pages/Apartment/Apartment";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../Components/Shared/ErrorPage";
import Dashboard from "../Layout/Dashboard";
import Announcement from "../Pages/Dashboard/Announcement/Announcement";
import MakePayment from "../Pages/Dashboard/Make Payment/MakePayment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import ManageMembers from "../Pages/Dashboard/Manage Members/ManageMembers";
import AgreementReq from "../Pages/Dashboard/Agreement Requests/AgreementReq";
import ManageCoupons from "../Pages/Dashboard/Manage Coupon/ManageCoupons";
import MakeAnnouncement from "../Pages/Dashboard/Make Announcement/MakeAnnouncement";
import MyProfile from "../Pages/Dashboard/My Profile/MyProfile";
import AdminProfile from "../Pages/Dashboard/Admin Profile/AdminProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/apartment",
        element: <Apartment></Apartment>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "announcements",
        element: (
          <PrivateRoutes>
            <Announcement></Announcement>
          </PrivateRoutes>
        ),
      },
      {
        path: "make-payment",
        element: (
          <PrivateRoutes>
            <MakePayment></MakePayment>
          </PrivateRoutes>
        ),
      },
      {
        path: "payment-history",
        element: (
          <PrivateRoutes>
            <PaymentHistory></PaymentHistory>
          </PrivateRoutes>
        ),
      },
      {
        path: "manage-members",
        element: (
          <PrivateRoutes>
            <ManageMembers></ManageMembers>
          </PrivateRoutes>
        ),
      },
      {
        path: "agreement-requests",
        element: (
          <PrivateRoutes>
            <AgreementReq></AgreementReq>
          </PrivateRoutes>
        ),
      },
      {
        path: "manage-coupons",
        element: (
          <PrivateRoutes>
            <ManageCoupons></ManageCoupons>
          </PrivateRoutes>
        ),
      },
      {
        path: "make-announcement",
        element: (
          <PrivateRoutes>
            <MakeAnnouncement></MakeAnnouncement>
          </PrivateRoutes>
        ),
      },
      {
        path: "my-profile",
        element: (
          <PrivateRoutes>
            <MyProfile></MyProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "admin-profile",
        element: (
          <PrivateRoutes>
            <AdminProfile></AdminProfile>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
