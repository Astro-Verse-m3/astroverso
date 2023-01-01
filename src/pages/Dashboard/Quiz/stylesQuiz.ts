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
  padding: 10px;
  width: 100%;
  margin: 12px 0;
  background: transparent;
  font-size: 18px;
  color: #fff;

  &.correct {
    background: rgba(91, 244, 77, 0.5);
    border: 1px solid #d0cedd;
    font-weight: bold;
  }

  &.wrong {
    background: rgba(230, 12, 12, 0.5);
    border: 1px solid #d0cedd;
    font-weight: bold;
  }

  @media (max-width: 280px) {
    font-size: 14px;
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

  @media (max-width: 280px) {
    font-size: 16px;
    padding: 12px;
  }
`;
