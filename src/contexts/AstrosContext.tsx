import { useState, createContext, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { iChildren } from "./typeContext";
import { UserContext } from "./UserContext";

export const AstrosContext = createContext({});

export const AstrosProvider = ({ children }: iChildren) => {
	const { user } = useContext(UserContext);

	const { id } = useParams();
	const navigate = useNavigate();

	/*const login = async (data: iUserLogin) => {
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
			const userData = { ...data, score: 0, favoritesPosts: [] };
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
	}, []);*/

	return <AstrosContext.Provider value={{}}>{children}</AstrosContext.Provider>;
};
//user, setUser, login, signUp, windowSize
