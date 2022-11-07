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

  transition: transform 0.8s;
  transform-style: preserve-3d;

  position: relative;

  @media (min-width: 500px) {
    width: 80%;
  }

  @media (min-width: 760px) {
    max-width: 700px;
    height: 65%;
    margin-bottom: 35px;
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
