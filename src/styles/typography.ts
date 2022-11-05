import styled, { css } from "styled-components";
import { BaseTitle } from "./components/typography";
import { iTextProps } from "./typesStyles/typeTypography";

export const StyledTitle = styled(BaseTitle)<iTextProps>`
  ${({ fontSize }) => {
    switch (fontSize) {
      case "one":
        return css`
          font-size: var(--title-1);
        `;
      case "two":
        return css`
          //utlizado apenas para a logo
          font-size: var(--title-2);
          font-family: var(--font-family-Flamenco);
          font-weight: var(--font-weight-regular);
        `;
      case "three":
        return css`
          font-size: var(--title-3);
        `;
      case "four":
        return css`
          font-size: var(--title-4);
        `;
      case "five":
        return css`
          font-size: var(--title-5);
        `;
      case "six":
        return css`
          font-size: var(--paragraph-1);
        `;
      case "seven":
        return css`
          font-size: var(--paragraph-2);
        `;
      case "eight":
        return css`
          font-size: var(--author-1);
        `;
    }
  }}

  ${({ margin }) => {
    switch (margin) {
      case "one":
        return css`
          margin-top: -35px;
        `;
      case "two":
        return css`
          margin-top: 5px;
        `;
    }
  }}

${({ align }) => {
    switch (align) {
      case "one":
        return css`
          align-self: end;
          text-decoration: underline;
        `;
      case "two":
        return css`
          //para quando tiver outra opção
        `;
    }
  }}

${({ color }) => {
    switch (color) {
      case "one":
        return css`
          color: var(--feedback-negative);
        `;
    }
  }}

`;
