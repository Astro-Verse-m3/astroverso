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
      position: relative;

      @media (min-height: 800px) {
        margin-top: 15px;
      }

      img {
        width: 70%;

        @media (min-width: 325px) {
          width: 228px;
        }

        @media (min-width: 760px) {
          transform: rotateY(180deg);
          width: 190px;
          position: absolute;
          left: -5px;
          top: 74px;
        }

        @media (min-width: 1440px) {
          left: 200px;
        }

        @media (min-width: 2560px) {
          left: 770px;
        }

        @media (min-height: 1180px) {
          top: 127px;
        }

        @media (min-height: 1368px) {
          top: 197px;
        }
      }
    }
  }
`;
