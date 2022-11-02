/* eslint-disable react-hooks/exhaustive-deps */
import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { iUserLogin } from "../pages/Login/typeLogin";
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
      console.log(response)
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("@astroverso:token");
    !token && navigate("/login");
  }, [])
  
  return (
    <UserContext.Provider value={{ user, setUser, login }}>
      {children}
    </UserContext.Provider>
  );
};
