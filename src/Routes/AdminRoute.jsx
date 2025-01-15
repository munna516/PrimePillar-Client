import React from "react";
import useRole from "../Hooks/useRole";
import Loading from "../Components/Shared/Loading";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const [role, isLoading] = useRole();
  if (isLoading) return <Loading></Loading>;
  if (role === "admin") {
    return children;
  }

  if (role === "user") {
    return <Navigate to="/dashboard/my-profiles"></Navigate>;
  }
  if (role === "member") {
    return <Navigate to="/dashboard/my-profile"></Navigate>;
  }
};

export default AdminRoute;
