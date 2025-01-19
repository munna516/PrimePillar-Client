import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosPrivate = axios.create({
  baseURL: "https://prime-pillar-server.vercel.app",
});

const useAxiosPrivate = () => {
  const navigate = useNavigate();
  const { userLogOut } = useAuth();
  // Request Interceptors
  axiosPrivate.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("token");
      // console.log(token)
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  //   Response Interceptors
  axiosPrivate.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error?.response?.status;
      if (status === 401 || status === 403) {
        await userLogOut();
        navigate("/login", { replace: true });
      }
      return Promise.reject(error);
    }
  );
  return axiosPrivate;
};

export default useAxiosPrivate;
