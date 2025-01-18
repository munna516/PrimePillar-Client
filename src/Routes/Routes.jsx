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
import AdminProfile from "../Pages/Dashboard/Admin Profile/AdminProfile";
import AdminRoute from "./AdminRoute";
import MemberRoute from "./MemberRoute";
import UserProfile from "../Pages/Dashboard/User Profile/UserProfile";
import MemberProfile from "../Pages/Dashboard/Member Profile/MemberProfile";
import Payment from "../Pages/Dashboard/Make Payment/Payment";
import TermsCondition from "../Components/Terms & Conditions/TermsCondition";
import Contact from "../Components/Contact/Contact";

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
      {
        path: "/terms-condition",
        element: <TermsCondition></TermsCondition>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
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
            <MemberRoute>
              <MakePayment></MakePayment>
            </MemberRoute>
          </PrivateRoutes>
        ),
      },
      {
        path: "payment-history",
        element: (
          <PrivateRoutes>
            <MemberRoute>
              <PaymentHistory></PaymentHistory>
            </MemberRoute>
          </PrivateRoutes>
        ),
      },
      {
        path: "manage-members",
        element: (
          <PrivateRoutes>
            <AdminRoute>
              <ManageMembers></ManageMembers>
            </AdminRoute>
          </PrivateRoutes>
        ),
      },
      {
        path: "agreement-requests",
        element: (
          <PrivateRoutes>
            <AdminRoute>
              <AgreementReq></AgreementReq>
            </AdminRoute>
          </PrivateRoutes>
        ),
      },
      {
        path: "manage-coupons",
        element: (
          <PrivateRoutes>
            <AdminRoute>
              <ManageCoupons></ManageCoupons>
            </AdminRoute>
          </PrivateRoutes>
        ),
      },
      {
        path: "make-announcement",
        element: (
          <PrivateRoutes>
            <AdminRoute>
              <MakeAnnouncement></MakeAnnouncement>
            </AdminRoute>
          </PrivateRoutes>
        ),
      },
      {
        path: "my-profile",
        element: (
          <PrivateRoutes>
            <MemberRoute>
              <MemberProfile></MemberProfile>
            </MemberRoute>
          </PrivateRoutes>
        ),
      },
      {
        path: "admin-profile",
        element: (
          <PrivateRoutes>
            <AdminRoute>
              <AdminProfile></AdminProfile>
            </AdminRoute>
          </PrivateRoutes>
        ),
      },
      {
        path: "my-profiles",
        element: (
          <PrivateRoutes>
            <UserProfile></UserProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "payment/:month/:rent",
        element: (
          <PrivateRoutes>
            <MemberRoute>
              <Payment></Payment>
            </MemberRoute>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
