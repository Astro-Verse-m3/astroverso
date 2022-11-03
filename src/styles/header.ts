import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 10px 20px;

  h1 {
    font-family: "Flamenco";
    color: var(--color-grey-2);
    font-size: var(--title-2);
    font-weight: var(--font-weight-regular);
  }

  nav {
    align-self: center;

    a {
      padding: 5px 15px;
      border-radius: 20px;
      background-color: var(--color-grey-2);
      color: var(--color-secondary-darker);
      font-size: var(--paragraph-1);
    }
  }
`;
