import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPrivate from "./useAxiosPrivate";
import { useEffect } from "react";

const useRole = () => {
  const { user, loading } = useAuth();
  const axiosPrivate = useAxiosPrivate();

  const { data: role, isLoading } = useQuery({
    queryKey: [user?.email, "role"],
    enabled: !loading,
    queryFn: async () => {
      const { data } = await axiosPrivate.get(`/users/role/${user?.email}`);
      console.log(data);
      return data.role;
    },
  });
  return [role, isLoading];
};

export default useRole;
