import React from "react";
import { StyledTitle } from "../../styles/typography";

import { iCardProps } from "./typeCard";
import { StyledButtonCard, StyledCard, StyledContainerImg } from "./style";

const Card = ({
  astroCard,
  quizCard,
  typeCard,
  logic,
  onClick,
}: iCardProps) => {
  return (
    <>
      <StyledCard id={`${astroCard?.id}`} onClick={onClick}>
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
          <StyledButtonCard onClick={logic}>
            {quizCard?.textButton}
          </StyledButtonCard>
        )}
      </StyledCard>
    </>
  );
};

export default Card;
