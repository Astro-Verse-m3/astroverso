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
          font-size: var(--title-2);
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
`;

export const StyledSpan = styled.span<iTextProps>`
  ${({ fontSize }) => {
    switch (fontSize) {
      case "one":
        return css`
          font-size: var(--title-1);
        `;
      case "two":
        return css`
          font-size: var(--title-2);
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
          font-size: var(--paragraph-1);
        `;
      case "six":
        return css`
          font-size: var(--paragraph-2);
        `;
      case "seven":
        return css`
          font-size: var(--author-1);
        `;
    }
  }}
`;

export const StyledParagraph = styled.p<iTextProps>`
  ${({ fontSize }) => {
    switch (fontSize) {
      case "one":
        return css`
          font-size: var(--title-1);
        `;
      case "two":
        return css`
          font-size: var(--title-2);
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
          font-size: var(--paragraph-1);
        `;
      case "six":
        return css`
          font-size: var(--paragraph-2);
        `;
      case "seven":
        return css`
          font-size: var(--author-1);
        `;
    }
  }}
`;
