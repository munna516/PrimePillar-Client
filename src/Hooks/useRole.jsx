import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPrivate from "./useAxiosPrivate";

const useRole = () => {
  const { user, loading } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const { data: role, isLoading } = useQuery({
    queryKey: ["role", user?.email],
    queryFn: async () => {
      const { data } = await axiosPrivate(`/users/role/${user?.email}`);
      return data.role;
    },
  });
  return [role, isLoading];
};

export default useRole;
