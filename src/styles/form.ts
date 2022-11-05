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

  @media (min-width: 760px) {
    width: 80%;
    height: 65%;
    margin-bottom: 78px;
  }

  @media (min-width: 1024px) {
    width: 850px;
  }

  .inputs-login {
    width: 90%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 760px) {
      width: 80%;
    }
  }

  .button-login {
    width: 90%;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 760px) {
      width: 80%;
    }
  }
`;
