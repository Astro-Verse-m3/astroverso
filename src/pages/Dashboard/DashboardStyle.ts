import styled from "styled-components";

export const QuizMain = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  position: relative;
  top: -10%;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    gap: 30px;
  }
`;

export const QuizCard = styled.section`
  width: 300px;
  height: 400px;

  background-color: var(--color-primary-darker);

  border-radius: 4px;

  padding: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  img {
    width: 180px;
  }
`;
