import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { iStyledLink } from "./typesStyles/typeTypography";

export const StyledLink = styled(Link)<iStyledLink>`
  ${({ type }) => {
    switch (type) {
      case "one":
        return css`
          padding: 5px 18px;
          border-radius: 20px;
          background-color: var(--color-grey-2);
          color: var(--color-secondary-darker);
          font-size: var(--paragraph-1);

          @media (min-width: 760px) {
            padding: 7px 45px;
            font-size: var(--title-5);
          }
        `;
      case "two":
        return css`
          font-size: var(--paragraph-2);
          color: var(--color-grey-2);
          font-weight: var(--font-weight-regular);
          text-decoration: underline;
          margin-left: 5px;

          @media (min-width: 325px) {
            margin-left: 10px;
            font-size: var(--paragraph-1);
          }

          @media (min-width: 760px) {
            margin-left: 10px;
            font-size: var(--title-7);
          }
        `;
    }
  }}
`;
