import styled from "styled-components";

export const StyledModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 99999999;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(3px);
`;

export const StyledModalCard = styled.div`
  height: fit-content;
  max-height: 80%;
  width: 50%;
  position: relative;
  padding: 2rem 1.5rem;
  border-radius: 20px;
  background-color: rgb(25, 24, 49, 0.95);
  color: #fff;

  @media (max-width: 1135px) {
    min-width: 550px;
  }

  @media (max-width: 580px) {
    min-width: 85%;
  }

  @media (max-width: 360px) {
    top: 30px;
  }

  @media (max-width: 280px) {
    top: 0;
    padding: 2rem 1rem;
  }

  .close-button {
    background-color: #d0cedd;
    color: #000;
    border-radius: 50%;
    position: absolute;
    right: 10px;
    top: 10px;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 280px) {
      top: -60px;
      z-index: 10;
    }

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

    @media (max-width: 580px) {
      flex-direction: column;
      transform: translateY(-140px);
    }

    @media (max-width: 360px) {
      transform: translateY(-125px);
    }
  }

  .loader-container {
    background-color: transparent;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .loader-img {
    animation: spin 2s infinite linear;
    width: 3rem;
    height: 3rem;
    margin-bottom: 2rem;
  }

  .loader-container {
    background-color: transparent;
    width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loader-img {
    animation: rotate 2s infinite linear;
    width: 3rem;
    height: 3rem;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const StyledCardName = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  .animated-image {
    width: 5rem;
  }

  @media (max-width: 580px) {
    gap: 0;
  }

  h2 {
    font-size: 40px;
    font-family: "Righteous", cursive;
    font-weight: 800;
  }
`;

export const StyledCardContent = styled.div`
  width: 50%;
  height: 15rem;
  overflow: auto;
  text-align: justify;
  font-family: "Nunito", sans-serif;

  @media (max-width: 580px) {
    width: 100%;
    height: 11rem;
    margin-top: 15px;
  }

  @media (max-width: 360px) {
    height: 12rem;
  }

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

  @media (max-width: 580px) {
    bottom: 1rem;
  }

  button {
    background-color: #d0cedd;
    width: 4rem;
    height: 2rem;
    border-radius: 20px;

    @media (max-width: 280px) {
      width: 20%;
    }

    &:hover {
      color: #4200ff;
    }
  }

  svg {
    width: 25px;
    height: 22px;
  }
`;
