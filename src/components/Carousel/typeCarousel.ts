import { iQuizCardProps } from "../Card/typeCard";
import { iAstro } from "../../contexts/typeContext";

export interface iCarouselProps {
	astroList?: iAstro[];
	quizList?: iQuizCardProps[];
}
