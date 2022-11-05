import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 88%;
  margin-top: 10px;

  @media (min-width: 2560px) {
    width: 50%;
  }

  nav {
    align-self: center;
  }
`;
