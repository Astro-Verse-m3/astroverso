import styled from "styled-components";

import { Link } from "react-router-dom";

import {
	fadeInAnimation,
	fadeOutAnimation,
	underlineHoverEffect
} from "../../../styles/global";

export const StyledHeaderMenu = styled.header`
	width: var(--width-1);
	height: calc(var(--height-1) * 1.5);

	background-color: var(--color-primary-darker);
	filter: opacity(0.8);

	& > div {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
`;

export const StyledNav = styled.nav`
	width: max-content;
	max-width: var(--width-1);
	max-height: var(--width-1);

	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: var(--gap-3);

	@media screen and (min-width: 1024px) {
		max-width: var(--width-2);
	}
`;

export const StyledContainerLogo = styled.figure`
	width: var(--width-1);
	max-width: calc(var(--height-1) * 2.75);
	height: var(--height-3);

	display: flex;
	align-items: center;
	justify-content: flex-start;

	& > img {
		width: var(--width-1);
		max-width: var(--width-1);
	}
`;

export const StyledContainerMenu = styled.div`
	width: max-content;
	height: var(--width-1);
	max-height: var(--width-1);

	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: var(--gap-3);

	${fadeInAnimation}
	${fadeOutAnimation}

	.dropdown-menu {
		position: absolute;
		top: 72px;
		right: 16px;

		width: calc(var(--height-1) * 4);
		padding: 20px;

		background-color: var(--color-grey-1);
		border-radius: var(--radius-1);

		&::before {
			content: "";
			position: absolute;
			top: -8px;
			right: 20px;

			height: 20px;
			width: 20px;

			background-color: var(--color-grey-1);
			transform: rotate(45deg);
		}
	}

	.dropdown-menu.open {
		animation-name: "appear";
		animation-timing-function: ease-in;
		animation-duration: 0.5s;
	}

	.dropdown-menu.closed {
		animation-name: "disappear";
		animation-timing-function: ease-out;
		animation-duration: 0.5s;
	}
`;

export const StyledMenuList = styled.ul`
	width: max-content;
	max-height: var(--width-1);

	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: var(--gap-4);

	li > a {
		padding-top: calc(var(--gap-6) + 6px);
	}
`;

export const StyledMenuItem = styled.li`
	gap: var(--gap-5);

	&:nth-child(3) {
		& > a {
			color: var(--color-secondary);
		}

		& > a:hover:before {
			opacity: 1;
			width: 100%;
		}

		& > a:hover:after {
			max-width: 100%;
		}
	}
`;

export const StyledMenuLink = styled(Link)`
	height: var(--height-1);
	padding-top: var(--gap-5);

	font-size: var(--title-5);
	color: var(--color-grey-2);

	position: relative;

	${underlineHoverEffect}
`;

export const StyledHeaderDropdown = styled.div`
	width: var(--width-1);
	height: var(--height-1);
	padding-top: var(--gap-5);
	margin-bottom: var(--gap-6);

	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: var(--gap-5);

	svg {
		font-size: var(--title-2);
		color: var(--color-grey-2);
	}

	a {
		font-size: var(--title-5);
		color: var(--color-grey-2);

		position: relative;
	}
`;
