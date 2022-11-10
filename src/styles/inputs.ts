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

  &:focus-within {
    border-bottom: 1px solid var(--color-primary-1);
  }

  @media (min-width: 760px) {
    padding-bottom: 15px;
    font-size: var(--title-4);
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
          margin-bottom: 30px;

          @media (min-height: 800px) {
            margin-bottom: 35px;
          }

          @media (min-height: 844px) {
            margin-bottom: 50px;
          }

          @media (min-height: 1024px) {
            margin-bottom: 70px;
          }
        `;
      case "two":
        return css`
          margin-bottom: 15px;

          @media (min-height: 800px) {
            margin-bottom: 24px;
          }

          @media (min-height: 844px) {
            margin-bottom: 34px;
          }

          @media (min-height: 1024px) {
            margin-bottom: 50px;
          }
        `;
    }
  }}
`;
