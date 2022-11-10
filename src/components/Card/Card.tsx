import React, { useContext } from "react";
import { StyledTitle } from "../../styles/typography";

import { iCardProps } from "./typeCard";
import { StyledButtonCard, StyledCard, StyledContainerImg } from "./style";
import { PostsContext } from "../../contexts/PostsContext";

const Card = ({ astroCard, quizCard, typeCard, logic }: iCardProps) => {
  const { setShowModal } = useContext(PostsContext);

  return (
    <>
      <StyledCard id={`${astroCard?.id}`}>
        <StyledContainerImg onClick={() => setShowModal(true)}>
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
