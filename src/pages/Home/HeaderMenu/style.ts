import styled from "styled-components";

export const StyledHeaderMenu = styled.header`
	width: var(--width-1);
	height: calc(var(--height-1) * 1.5);
	padding: var(--gap-6) var(--gap-3);

	background-color: var(--color-primary-darker);
	filter: opacity(0.8);

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const StyledNavMobile = styled.nav`
	width: var(--width-1);
	max-width: var(--width-1);

	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: var(--gap-3);

	@media screen and (min-width: 600px) {
		display: none;
	}
`;

export const StyledNavDesktop = styled.nav`
	width: var(--width-1);
	max-width: var(--width-1);

	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: var(--gap-3);

	@media screen and (max-width: 540px) {
		display: none;
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

export const StyledBtnDropdown = styled.button`
	color: var(--color-grey-2);
	font-size: var(--gap-1);
	opacity: 0.8;

	& > svg {
		pointer-events: none;
	}
`;

export const StyledContainerMenu = styled.div`
	width: max-content;

	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: var(--gap-3);
`;

export const StyledMenuList = styled.ul`
	width: max-content;

	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: var(--gap-4);

	& > li > a {
		color: var(--color-grey-2);
		font-size: var(--title-5);
	}

	/* Hover border effect */
	& > li > a:before,
	& > a:after {
		position: absolute;
		-webkit-transition: all 0.35s ease;
		transition: all 0.35s ease;
	}
	& > li > a:before {
		display: block;
		height: 2px;
		width: 0%;
		top: 70%;
		content: "";
		background-color: var(--color-grey-2);
	}
	& > li > a:after {
		max-width: 0%;
		overflow: hidden;
	}
	& > li > a:hover:before {
		opacity: 1;
		width: 5%;
	}

	& > li > a:hover:after {
		max-width: 5%;
	}

	& > li:last-child {
		a {
			color: var(--color-secondary);
		}

		a:hover:before {
			opacity: 1;
			width: 3%;
		}

		a:hover:after {
			max-width: 3%;
		}
	}
`;

export const StyledHeaderDropdown = styled.div`
	width: var(--width-1);
	height: var(--height-1);
	padding-top: var(--gap-6);

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

	&:hover a,
	&:hover svg {
		color: var(--color-primary-darker);
	}

	/* Hover border effect */
	& > a:before,
	& > a:after {
		position: absolute;
		-webkit-transition: all 0.35s ease;
		transition: all 0.35s ease;
	}
	& > a:before {
		display: block;
		height: 3px;
		width: 0%;
		top: 100%;
		content: "";
		background-color: var(--color-primary-darker);
	}
	& > a:after {
		max-width: 0%;
		overflow: hidden;
	}
	& > a:hover:before {
		opacity: 1;
		width: 100%;
	}
	& > a:hover:after {
		max-width: 100%;
	}
`;

export const StyledContainerItem = styled.div`
	width: var(--width-1);
	height: var(--height-1);
	padding-top: var(--gap-4);
	padding-left: var(--gap-6);

	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: var(--gap-5);

	svg {
		font-size: var(--title-4);
		color: var(--color-grey-2);
	}

	a {
		font-size: var(--title-5);
		color: var(--color-grey-2);
	}

	a {
		position: relative;
	}

	&:hover a,
	&:hover svg {
		color: var(--color-grey-0);
	}

	/* Hover border effect */
	& > a:before,
	& > a:after {
		position: absolute;
		-webkit-transition: all 0.35s ease;
		transition: all 0.35s ease;
	}
	& > a:before {
		display: block;
		height: 2px;
		width: 0%;
		top: 115%;
		content: "";
		background-color: var(--color-grey-0);
	}
	& > a:after {
		max-width: 0%;
		overflow: hidden;
	}
	& > a:hover:before {
		opacity: 1;
		width: 100%;
	}
	& > a:hover:after {
		max-width: 100%;
	}
`;
