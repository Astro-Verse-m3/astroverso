import React from "react";
import { StyledLink } from "../../styles/link";
import { StyledSection } from "../../styles/section";
import { StyledTitle } from "../../styles/typography";

export const NotFound = () => {
  return (
    <StyledSection>
      <StyledTitle tag="h2" fontSize="five" margin="one" editText="one">
        Página não encontrada!
      </StyledTitle>
      <StyledLink to={"/"} type="two">
        Cadastre-se!
      </StyledLink>
    </StyledSection>
  );
};
