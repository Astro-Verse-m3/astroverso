import styled, { css } from "styled-components";
import { iStyledInputsForm } from "./typesStyles/typeTypography";

export const StyledInputsForm = styled.div<iStyledInputsForm>`
  width: var(--width-1);
  padding-bottom: 5px;

  border-bottom: 1px solid var(--color-grey-2);
  font-size: var(--title-5);
  font-weight: var(--font-weight-regular);

  display: flex;
  align-items: center;

  &:focus-within{
    border-bottom: 1px solid var(--color-primary-1);
  }

  svg {
    font-size: var(--title-3);
    font-weight: var(--font-weight-regular);
  }

  input {
      padding-left: 10px;
      color: var(--color-grey-2);
      width: var(--width-1);

    &::placeholder {
      color: var(--color-grey-2);
    }
  }

  ${({ margin }) => {
    switch (margin) {
      case "one":
        return css`
          margin-bottom: 20px;
        `;
      case "two":
        return css`
          margin-bottom: 10px;
        `;
    }
  }}
`;
