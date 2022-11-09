import { type } from "@testing-library/user-event/dist/type";
import { iUserLogin } from "../pages/Login/typeLogin";
import { iUserRegister } from "../pages/Register/typeRegister";

export interface iChildren {
	children: React.ReactNode;
}
export interface iAstro {
	id: number;
	name: string;
	image?: string;
}
// export type iAstroPosts
export interface iFavoritesPosts {
	id: number;
	category: string;
	planetName: string;
	planetID: number;
	description: string;
}

export interface iUser {
	name: string;
	email: string;
	id: number;
	score?: number;
	favoritesPosts?: iFavoritesPosts[] | [];
}

export interface iUserContextProps {
	user: iUser | null;
	setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
	login: (data: iUserLogin) => void;
	signUp: (data: iUserRegister) => void;
	windowSize: {
		innerWidth: number;
	};
}
