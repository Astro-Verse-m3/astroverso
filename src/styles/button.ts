import styled, { css } from "styled-components";
import { iStyledButton } from "./typesStyles/typeTypography";

export const StyledButton = styled.button<iStyledButton>`
  width: var(--width-1);
  height: var(--height-4);

  background-color: var(--color-grey-2);
  color: var(--color-secondary-darker);
  border-radius: 30px;

  font-size: var(--title-5);
  font-weight: var(--font-weight-regular);
  font-family: var(--font-family-Georama);
  transition: ease-in-out 0.5s;

  &:hover {
    background-color: var(--color-secondary-darker);
    color: var(--color-grey-0);
  }

  @media (min-width: 760px) {
    height: var(--height-1);
    font-size: var(--title-3);
  }

  @media (min-width: 760px) {
    height: var(--height-1);
    font-size: var(--title-3);
  }

  @media (min-width: 1600px) {
    height: 3.5rem;
    margin: 15px 0;
  }

  ${({ margin }) => {
    switch (margin) {
      case "one":
        return css`
          margin: 15px 0 25px 0;

          @media (min-height: 840px) {
            margin: 20px 0 30px 0;
          }

          @media (min-height: 1024px) {
            margin: 30px 0 40px 0;
          }
        `;
      case "two":
        return css`
          margin: 10px 0 18px 0;

          @media (min-width: 760px) {
            margin: 15px 0 20px 0;
          }
        `;
    }
  }}
`