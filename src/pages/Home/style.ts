import styled from "styled-components";

import backgroundImg from "../../assets/Background.png";

export const StyledHomeContainer = styled.div`
	width: 100vw;
	height: 100vh;

	background-image: url(${backgroundImg});
	background-size: cover;
	background-position: center top;
	background-repeat: no-repeat;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
