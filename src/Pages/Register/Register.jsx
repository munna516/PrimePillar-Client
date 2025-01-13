import { Link, useNavigate } from "react-router-dom";
import RegistrationLottie from "../../assets/LottieFiles/RegistrationLottie.json";
import Lottie from "lottie-react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import GoogleLogin from "../../Components/GoogleLogin/GoogleLogin";

const Register = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] mt-36 mb-14 ">
      <div className="md:flex w-full  mx-auto overflow-hidden  rounded-lg shadow-lg border-2  lg:max-w-4xl ">
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <p className="mt-3 text-xl text-center text-gray-600 ">
            Registration an Account
          </p>

          <GoogleLogin></GoogleLogin>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b  lg:w-1/4"></span>

            <div className="text-xs text-center text-gray-500 uppercase">
              or Registration with email
            </div>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
          </div>
          <form>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="name"
              >
                Username
              </label>
              <input
                id="name"
                autoComplete="name"
                required
                name="name"
                className="block w-full px-4 py-2 text-gray-700  border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="photo"
              >
                Photo URL
              </label>
              <input
                id="photo"
                autoComplete="photo"
                required
                name="photo"
                className="block w-full px-4 py-2 text-gray-700  border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="LoggingEmailAddress"
              >
                Email Address
              </label>
              <input
                id="LoggingEmailAddress"
                autoComplete="email"
                required
                name="email"
                className="block w-full px-4 py-2 text-gray-700  border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between relative">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 "
                  htmlFor="loggingPassword"
                >
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-lg absolute top-10 right-4"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <input
                id="loggingPassword"
                autoComplete="current-password"
                name="password"
                required
                className="block w-full px-4 py-2 text-gray-700  border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type={showPassword ? "text" : "password"}
              />
              {errorMessage && (
                <p className="mt-2 text-red-400 font-bold">{errorMessage}</p>
              )}
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="btn bg-dark-blue hover:bg-dark-blue text-lg w-full text-white"
              >
                Register
              </button>
            </div>
          </form>

          <div className="flex justify-between items-center mt-4">
            <p className="text-gray-500">Already have account? </p>
            <Link to="/login">
              <p className="font-bold text-primary hover:underline uppercase">
                Login
              </p>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center mx-auto">
          <Lottie animationData={RegistrationLottie}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Register;
