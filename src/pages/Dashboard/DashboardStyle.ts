import styled from "styled-components";

export const QuizMain = styled.main`
  margin: auto 80px;

  display: flex;
  flex-direction: column;
  gap: 30px;

  .CardContents {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10%;
    flex-direction: row;
  }
`;

export const QuizCard = styled.section`
  width: 25%;
  height: 400px;

  background-color: rgba(25, 24, 49, 0.8);

  border-radius: 8px;

  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  img {
    width: 60%;
  }

  @media (max-width: 768px) {
  }
`;
