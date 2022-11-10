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
  height: 30rem;
  width: 46%;
  position: relative;
  padding: 3rem 2rem;
  border-radius: 20px;
  background-color: rgb(25, 24, 49, 0.8);
  backdrop-filter: blur(25px);
  
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

  @media screen and (max-width: 1172px) {
    height: 70%;
    width: 50%;

    main {
      flex-direction: column;
      transform: translateY(-161px);
    }
  }

  @media screen and (max-width: 730px) {
    width: 60%;
  }

  @media screen and (max-width: 540px) {
    width: 80%;

    button {
      right: -7px !important;
      top: -10px !important ;
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

  h2 {
    font-size: 40px;
    font-family: 'Righteous', cursive;
    font-weight: 800;
  }

  @media screen and (max-width: 1172px) {
    margin-bottom: 2.5rem;
  }

  @media screen and (max-width: 540px) {
    margin-bottom: 1.5rem;

    h2 {
      font-size: 35px;
    }
  }
`;


 export const StyledCardContent = styled.div` 
  width: 50%;
  height: 15rem;
  padding: 0 10px;
  overflow: auto;
  font-family: 'Nunito', sans-serif;
  
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

  @media screen and (max-width: 1172px) {
    width: 100%;

    h3 {
      font-size: 25px;
    }

    p {
      font-size: 21px;
    }
  }

  @media screen and (max-width: 730px) {
    h3 {
      font-size: 20px;
    }

    p {
      font-size: 16px;
    }
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
