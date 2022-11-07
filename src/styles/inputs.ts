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

  @media (min-height: 800px) {
    padding-bottom: 10px;
  }

  @media (min-width: 760px) {
    padding-bottom: 20px;
    font-size: var(--title-7);
  }

  svg {
    font-size: var(--title-3);
    font-weight: var(--font-weight-regular);

    @media (min-width: 760px) {
      font-size: var(--title-7);
    }
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

          @media (min-height: 800px) {
            margin-bottom: 35px;
          }

          @media (min-height: 1024px) {
            margin-bottom: 60px;
          }

          @media (min-height: 1180px) {
            margin-bottom: 70px;
          }

          @media (min-height: 1368px) {
            margin-bottom: 90px;
          }
        `;
      case "two":
        return css`
          margin-bottom: 10px;

          @media (min-height: 800px) {
            margin-bottom: 24px;
          }

          @media (min-height: 1024px) {
            margin-bottom: 30px;
          }

          @media (min-height: 1180px) {
            margin-bottom: 40px;
          }

          @media (min-height: 1368px) {
            margin-bottom: 60px;
          }
        `;
    }
  }}
`;
