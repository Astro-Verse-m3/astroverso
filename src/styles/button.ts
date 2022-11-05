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

  &:hover{
    background-color: var(--color-secondary-darker);
    color: var(--color-grey-0);
  }

  ${({ margin }) => {
    switch (margin) {
      case "one":
        return css`
          margin: 8% 0 12% 0;
        `;
      case "two":
        return css`
          margin: 5% 0 8% 0;
        `;
    }
  }}
`;
