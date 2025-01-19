import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import { GoogleAuthProvider } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { saveUser } from "../../Api/utils";

const GoogleLogin = () => {
  const { googleSignIn } = useAuth();
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const handleGoogleSignIn = async () => {
    try {
      const data = await googleSignIn(googleProvider);

      navigate(location?.state ? location.state : "/");
      toast.success("Successfully login with Google");
      await saveUser(data?.user);
    } catch (err) {
      // toast.error("Something went wrong !!");
    }
  };
  return (
    <div>
      <div
        onClick={handleGoogleSignIn}
        className="flex cursor-pointer items-center justify-center mt-4 text-gray-600  border rounded-lg   hover:bg-gray-200 "
      >
        <div className="px-4 py-2 text-2xl">
          <FcGoogle />
        </div>

        <span className="w-5/6 px-4 py-3 font-bold text-center">
          Sign in with Google
        </span>
      </div>
    </div>
  );
};

export default GoogleLogin;
