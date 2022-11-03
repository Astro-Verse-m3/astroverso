/* eslint-disable react-hooks/exhaustive-deps */
import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { iUserLogin } from "../pages/Login/typeLogin";
import { iUserRegister } from "../pages/Register/typeRegister";
import { ApiRequests } from "../services/ApiRequest";
import { iChildren, iUser, iUserContextProps } from "./typeContext";

export const UserContext = createContext({} as iUserContextProps);

export const UserProvider = ({ children }: iChildren) => {
  const [user, setUser] = useState<iUser | null>(null);

  const navigate = useNavigate();

  const login = async (data: iUserLogin) => {
    try {
      const response = await ApiRequests.post("login", data);
      localStorage.setItem("@astroverso:token", response.data.accessToken);
      localStorage.setItem("@astroverso:id", response.data.user.id);
      setUser(response.data.user);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const signUp = async (data: iUserRegister) => {
    delete data.confirmPassword;
    try {
      const userData = { ...data, score: 0, favoritesPosts: [] } 
      await ApiRequests.post("register", userData);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("@astroverso:token");
    if (!token) {
      navigate("/login");
    } else if (token) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, login, signUp }}>
      {children}
    </UserContext.Provider>
  );
};
