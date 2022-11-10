import { useState, createContext, useEffect, useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { planetsList } from "../components/Slider";
import { ApiRequests } from "../services/ApiRequest";

import {
	iChildren,
	iAstrosContextProps,
	iAstro,
	iPlanetsPosts
} from "./typeContext";
import { UserContext } from "./UserContext";

export const AstrosContext = createContext({} as iAstrosContextProps);

export const AstrosProvider = ({ children }: iChildren) => {
	const astrosCategories = ["planetas, estrelas"];

	const { user } = useContext(UserContext);
	const [astroList, setAstroList] = useState<iAstro[] | []>(planetsList);

	const { category } = useParams();
	const getAstroByCategory = async () => {
		//category: string | undefined

		if (category) {
			console.log(category);

			// try {
			// 	const { data } = await ApiRequests.get<iAstro[]>(category);
			// 	console.log(data);

			// 	setAstroList(data);
			// } catch (error) {
			// 	console.log(error);
			// 	toast.error("Ops! Algo deu errado, tente mais tarde!");
			// }
		}
	};

	// getAstroByCategory();
	/*const getPostsByCategory = async (category: string) => {
		try {
			const { data } = await ApiRequests.get<>(category);
			console.log(data);

			setAstroList(data);
		} catch (error) {
			console.log(error);
			toast.error("Ops! Algo deu errado, tente mais tarde!");
		}
	};
*/

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

	return (
		<AstrosContext.Provider
			value={{ getAstroByCategory, astroList, astrosCategories }}
		>
			{children}
		</AstrosContext.Provider>
	);
};
