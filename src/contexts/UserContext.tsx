/* eslint-disable react-hooks/exhaustive-deps */
import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

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
			toast.success("Login realizado com sucesso.");
		} catch (error) {
			console.log(error);
			toast.error("Email e/ou senha são inválidos");
		}
	};

	const signUp = async (data: iUserRegister) => {
		delete data.confirmPassword;
		try {
			const userData = { ...data, score: 0, favoritesPosts: [] };
			await ApiRequests.post("register", userData);
			navigate("/login");
			toast.success("Cadastro realizado com sucesso.");
		} catch (error) {
			console.log(error);
			toast.error("E-mail já cadastrado");
		}
	};

	useEffect(() => {
		const token = localStorage.getItem("@astroverso:token");
		if (token) {
			navigate("dashboard");
		}
	}, []);

	const getWindowSize = () => {
		const { innerWidth } = window;
		return { innerWidth };
	};

	const [windowSize, setWindowSize] = useState(getWindowSize());

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowSize(getWindowSize());
		};

		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	const userLogout = () => {
		setUser(null);

		localStorage.removeItem("@astroverso:token");
		localStorage.removeItem("@astroverso:id");
	};

	return (
		<UserContext.Provider
			value={{ user, setUser, login, signUp, windowSize, userLogout }}
		>
			{children}
		</UserContext.Provider>
	);
};
