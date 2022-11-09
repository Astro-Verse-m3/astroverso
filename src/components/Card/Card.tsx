import React from "react";
import { StyledTitle } from "../../styles/typography";

import { iCardProps } from "./typeCard";
import { StyledButtonCard, StyledCard, StyledContainerImg } from "./style";

const Card = ({ astroCard, quizCard, typeCard }: iCardProps) => {
	return (
		<>
			<StyledCard>
				<StyledContainerImg>
					<img
						src={
							typeCard === "astroCard"
								? `${astroCard?.image}`
								: `${quizCard?.categoryImage}`
						}
						alt={
							typeCard === "astroCard"
								? `${astroCard?.name}`
								: `${quizCard?.categoryName}`
						}
						title={
							typeCard === "astroCard"
								? `${astroCard?.name}`
								: `${quizCard?.categoryName}`
						}
					/>
				</StyledContainerImg>

				<StyledTitle tag="h3" fontSize="nine" color="two">
					{typeCard === "astroCard"
						? `${astroCard?.name}`
						: `${quizCard?.categoryName}`}
				</StyledTitle>
				{typeCard === "quizCard" && (
					<StyledButtonCard>{quizCard?.textButton}</StyledButtonCard>
				)}
			</StyledCard>
		</>
	);
};

export default Card;
