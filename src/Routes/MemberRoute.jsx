import React from "react";
import useRole from "../Hooks/useRole";
import Loading from "../Components/Shared/Loading";
import { Navigate } from "react-router-dom";

const MemberRoute = ({ children }) => {
  const [role, isLoading] = useRole();
  if (isLoading) return <Loading></Loading>;
  if (role === "member") {
    return children;
  }
  if (role === "admin") {
    return <Navigate to="/dashboard/admin-profile"></Navigate>;
  }
  if (role === "user") {
    return <Navigate to="/dashboard/my-profiles"></Navigate>;
  }
};

export default MemberRoute;
