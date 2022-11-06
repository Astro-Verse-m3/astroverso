import styled from 'styled-components';

export const StyledModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledModalCard = styled.div`
  backdrop-filter: blur(25px);
  height: 30rem;
  width: 46%;
  border-radius: 20px;
  position: relative;
  padding: 3rem 2rem;
  font-family: 'Raleway';

  .close-button {
    background-color: #d0cedd;
    color: #000;
    border-radius: 50%;
    position: absolute;
    right: 2rem;
    top: 2rem;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: #4200ff;
    }
  }

  svg {
    width: 12px;
  }

  main {
    display: flex;
    align-items: center;
  }
`;

export const StyledCardName = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  h2 {
    font-size: 40px;
    font-weight: 800;
  }
`;

export const StyledCardContent = styled.div`
  width: 50%;

  h3 {
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    margin-top: 10px;
  }
`;

export const StyledBottomButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  left: 2rem;

  button {
    background-color: #d0cedd;
    width: 4rem;
    height: 2rem;
    border-radius: 20px;

    &:hover {
      color: #4200ff;
    }
  }

  svg {
    width: 25px;
    height: 22px;
  }
`;
