import styled from "styled-components";

export const StyledForm = styled.form`
  background-color: var(--color-transparecy-2);
  border-radius: 20px;
  width: 88%;
  height: 52%;

  margin-bottom: 25px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  .motion {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 500px) {
    width: 80%;
  }

  @media (min-width: 760px) {
    max-width: 700px;
    height: 65%;
  }

  @media (min-height: 840px) {
    height: 55%;
  }

  @media (min-height: 1024px) {
    height: 65%;
    margin-bottom: 55px;
  }

  @media (min-height: 1368px) {
    height: 60%;
    margin-bottom: 135px;
  }

  img {
    display: none;

    @media (min-width: 760px) {
      transform: rotateY(180deg);
      width: 190px;
      position: absolute;
      left: -90px;
      top: -140px;
      display: flex;
    }
  }

  .inputs-login {
    width: 90%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 500px) {
      width: 80%;
    }
  }

  .button-login {
    width: 90%;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 500px) {
      width: 80%;
    }
  }
`;
