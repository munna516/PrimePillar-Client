import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const axiosPublic = useAxiosPublic();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Google Sign In
  const googleSignIn = (googleProvider) => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Register a new user
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // User Login
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   Update User Profile
  const updateUserProfile = (updatedData) => {
    setLoading(true);
    return updateProfile(auth.currentUser, updatedData);
  };

  // User Logout
  const userLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      const usersInfo = {
        email: currentUser?.email,
      };
      axiosPublic.post("/users", usersInfo).then((res) => {});
      if (currentUser) {
        const userInfo = { email: currentUser?.email };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res?.data?.token) {
            localStorage.setItem("token", res.data.token);
          }
        });
        setLoading(false);
      } else {
        localStorage.removeItem("token");
        setLoading(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [axiosPublic]);
  const authInfo = {
    user,
    setUser,
    loading,
    userLogin,
    createNewUser,
    googleSignIn,
    userLogOut,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
