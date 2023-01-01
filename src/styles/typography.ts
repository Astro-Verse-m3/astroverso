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

          @media (min-width: 760px) {
            font-size: var(--title-6);
          }
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
      case "nine":
        return css`
          //utlizado apenas para o card
          font-size: var(--title-6);
          font-family: var(--font-family-Righteous);
          font-weight: var(--font-weight-regular);
        `;

      case "ten":
        return css`
          font-size: var(--title-2);
          font-family: var(--font-family-Righteous);
          font-weight: var(--font-weight-regular);
        `;
    }
  }}

  ${({ margin }) => {
    switch (margin) {
      case "one":
        return css`
          margin-top: -25px;

          @media (min-height: 800px) {
            margin-top: 0;
          }
        `;
      case "two":
        return css`
          margin-top: 5px;
        `;
      case "three":
        return css`
          margin-bottom: 15px;
        `;
    }
  }}

  ${({ align }) => {
    switch (align) {
      case "one":
        return css`
          align-self: end;
          border-bottom: 1px solid;
          padding-bottom: 1px;
        `;
      case "two":
        return css`
          text-align: center;
        `;
    }
  }}

${({ color }) => {
    switch (color) {
      case "one":
        return css`
          color: var(--feedback-negative);
        `;
      case "two":
        return css`
          color: var(--color-grey-2);
        `;
    }
  }}


${({ editText }) => {
    switch (editText) {
      case "one":
        return css`
          @media (min-width: 325px) {
            font-size: var(--title-4);
          }

          @media (min-width: 760px) {
            font-size: var(--title-2);
            margin-top: 60px;
          }

          @media (min-height: 1024px) {
            margin-top: 100px;
          }

          @media (min-height: 1180px) {
            margin-top: 120px;
          }

          @media (min-height: 1368px) {
            margin-top: 140px;
            font-size: var(--title-6);
          }
        `;
      case "two":
        return css`
          @media (min-width: 325px) {
            font-size: var(--paragraph-1);
          }

          @media (min-width: 760px) {
            font-size: var(--title-5);
          }

          @media (min-height: 1024px) {
            font-size: var(--title-4);
          }
        `;
      case "three":
        return css`
          font-size: var(--author-1);

          @media (min-height: 800px) {
            font-size: var(--paragraph-1);
          }

          @media (min-height: 1024px) {
            font-size: var(--title-5);
          }
        `;
      case "four":
        return css`
          @media (min-width: 1600px) {
            font-size: var(--title-3);
          }

          @media (min-width: 2100px) {
            font-size: 30px;
          }
        `;
    }
  }}
`;
