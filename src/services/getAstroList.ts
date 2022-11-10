import { iAstro } from "../contexts/typeContext";
import { ApiRequests } from "./ApiRequest";

export const getAstroList = async (category: string) => {
	const { data } = await ApiRequests.get<iAstro[]>(category);

	return data;
};
