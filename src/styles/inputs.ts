import styled from "styled-components";

export const StyledInputsForm = styled.div`
  width: 100%;
  margin-bottom: 25px;
  padding-bottom: 8px;

  border-bottom: 1px solid var(--color-grey-2);
  font-size: var(--title-5);
  font-weight: var(--font-weight-regular);

  display: flex;
  align-items: center;

  svg {
    font-size: var(--title-3);
    font-weight: var(--font-weight-regular);
  }

  input {
      padding-left: 10px;

    &::placeholder {
      color: var(--color-grey-2);
    }
  }
`;
