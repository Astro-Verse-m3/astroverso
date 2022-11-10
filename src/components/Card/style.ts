import styled from 'styled-components';
import { StyledContainerLogo } from '../Header/HeaderMenu/style';

export const StyledCard = styled.div`

	height: calc(var(--width-2) / 5.5);
	padding: var(--gap-5);
	cursor: pointer;

	background-color: var(--color-primary-darker);
	border-radius: var(--radius-2);

  width: var(--width-1);
  max-width: calc(var(--width-2) / 5);
  height: calc(var(--width-2) / 5.5);
  padding: var(--gap-5);

  background-color: rgb(25, 24, 49, 0.8);
  backdrop-filter: blur(25px);
  border-radius: var(--radius-2);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5);

  & > h3 {
    display: none;
    transition: 1s ease;
  }

  &:hover {
    & > figure > img {
      transition: 1s ease;
      transform: translateY(-25%);
    }

    & > h3 {
      display: block;
      transition: 1s ease;
      transform: translateY(-70%);
    }
  }

  @media screen and (min-width: 768) {
  }
`;

export const StyledContainerImg = styled(StyledContainerLogo)`
	max-width: calc(var(--height-1) * 4);
	height: calc(var(--height-1) * 3);

	& > img {
		object-fit: cover;
	}

`;

export const StyledButtonCard = styled.button`
  width: var(--width-1);
  max-width: var(--width-1);
  height: var(--height-1);

  color: var(--color-grey-2);
  font-size: var(--title-2);
  font-family: var(--font-family-Righteous);
  font-weight: var(--font-weight-regular);
`;
