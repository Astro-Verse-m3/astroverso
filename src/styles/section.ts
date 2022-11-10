import styled from "styled-components";

export const StyledSection = styled.section`
  height: 100vh;
  background: linear-gradient(
    116.31deg,
    var(--linear-gradient-1) 0.49%,
    var(--linear-gradient-2) 52.83%,
    var(--linear-gradient-3) 100%
  );
  color: var(--color-grey-2);
  font-family: var(--font-family-Georama);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .header-gif {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 70%;

        @media (min-width: 325px) {
          width: 228px;
        }

        @media (min-width: 760px) {
          display: none;
        }
      }
    }
  }
`;
