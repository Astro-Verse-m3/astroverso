import { iUserLogin } from "../pages/Login/typeLogin";
import { iUserRegister } from "../pages/Register/typeRegister";

export interface iChildren {
	children: React.ReactNode;
}

export interface iPlanetsPosts {
	id: number;
	category: string;
	planetName: string;
	planetID: number;
	description: string;
}

export interface iStarsPosts {
	id: number;
	category: string;
	startName: string;
	startID: number;
	description: string;
}
export interface iUser {
	name: string;
	email: string;
	id: number;
	score?: number;
	favoritesPosts?: iPlanetsPosts[] | iStarsPosts[] | [];
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

export interface iAstro {
	id: number;
	name: string;
	image?: string;
}

export interface iQuizModalInterface {
	showModal: boolean;
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
	modalContents: "todos" | "planetas" | "estrelas";
	setModalContents: React.Dispatch<
		React.SetStateAction<"todos" | "planetas" | "estrelas">
	>;
	currentQuest: number;
	setCurrentQuest: React.Dispatch<React.SetStateAction<number>>;
	points: number;
	setPoints: React.Dispatch<React.SetStateAction<number>>;
	showPoints: boolean;
	setShowPoints: React.Dispatch<React.SetStateAction<boolean>>;
	answerQuestion: (point: number) => void;
}

export interface iContextInterface {
	myQuiz: iMyQuiz | null;
	setMyQuiz: React.Dispatch<React.SetStateAction<iMyQuiz | null>>;

	answerSelected: null | iAnswer;
	setAnswerSelected: React.Dispatch<React.SetStateAction<null | iAnswer>>;
}
export interface iMyOptions {
	answer: string;
	point: number;
}

export interface iMyQuests {
	id: number;
	title: string;
	options: iMyOptions[];
}

export interface iMyQuiz {
	questions: iMyQuests[];
}

export interface iAnswer {
	point: number;
}

export interface iProps {
	children: React.ReactNode;
}

export interface iAstrosContextProps {
	getAstroByCategory(): Promise<void>;
	astroList: iAstro[];
	astrosCategories: string[];
}
//category: string | undefined
