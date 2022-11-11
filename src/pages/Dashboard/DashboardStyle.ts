import styled from "styled-components";

export const QuizMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media (max-width: 912px) {
    height: 85%;
  }

  .align-quiz {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;

    width: 90%;
    height: 80%;

    margin-top: -50px;

    @media (max-width: 912px) {
      gap: 30px;
      justify-content: unset;
    }
  }

  .CardContents {
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;

    @media (max-width: 727px) {
      overflow-x: auto;
    }
  }
`;

export const QuizCard = styled.section`
  width: 25%;
  height: 350px;

  background-color: rgba(25, 24, 49, 0.8);

  border-radius: 8px;

  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;


  img {
    width: 60%;

    @media (max-width: 471px) {
      width: 190px  ;
    }
  }

  @media (max-width: 950px) {
    min-width: 210px;
    margin: 15px 0;
  }

  @media (max-width: 471px) {
    margin: 10px 0;
    min-width: 95%;
    height: 400px;
  }
`;
