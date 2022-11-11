import { iAstro } from "../../contexts/typeContext";

export interface iQuizCardProps {
  categoryImage: string;
  categoryName: string;
  textButton: string;
}

export interface iCardProps {
  astroCard?: iAstro;
  quizCard?: iQuizCardProps;
  typeCard: string;
  logic?: () => void;
  onClick?: () => void;
}
