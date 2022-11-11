import styled from "styled-components";

export const FundoFixo = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  padding-left: 24px;
  padding-right: 24px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivQuiz = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 40%;
  }

  /* @media (max-width: 768px) {
    max-width: 100%;
    padding: 64px 24px;
  }

  .question {
    font-family: "Raleway", sand-serif;
    font-weight: bold;
    font-size: 25px;
    margin-bottom: 24px;
  } */
`;

export const CloseButton = styled.button`
  background: #d0cedd;
  border-radius: 100%;
  text-align: center;
  color: #000000;
  font-weight: bold;
  min-width: 32px;
  min-height: 32px;

  position: absolute;
  right: 8px;
  top: 8px;
`;

export const Option = styled.button`
  border: 1px solid #d0cedd;
  border-radius: 14px;
  text-align: center;
  padding: 16px;
  width: 100%;
  margin: 16px 0;
  background: transparent;
  font-weight: bold;
  font-size: 18px;
  color: #fff;

  &.correct {
    background: rgba(91, 244, 77, 0.5);
    border: 1px solid #d0cedd;
  }

  &.wrong {
    background: rgba(230, 12, 12, 0.5);
    border: 1px solid #d0cedd;
  }
`;

export const Proximo = styled.button`
  background: rgba(208, 206, 221, 0.5);
  border-radius: 14px;
  padding: 16px;
  width: 100%;
  font-size: 20px;
  color: #fff;

  margin-top: 24px;
`;
