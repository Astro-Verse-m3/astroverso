import styled from "styled-components";
import { TooltipCSS } from "../../styles/global";

export const StyledFooter = styled.footer`
	width: var(--width-1);
	max-height: calc(var(--width-2) / 3.97);

	background-color: var(--color-primary-darker);
	/* filter: opacity(0.8); */

	& > div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		gap: var(--gap-5);

		.footer-about,
		.footer-developers {
			width: var(--width-1);
			max-width: var(--width-1);

			color: var(--color-grey-1);

			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-start;
			gap: var(--gap-5);
		}

		.footer-about {
			& > p {
				width: var(--width-1);
				height: var(--width-1);

				font-size: var(--paragraph-2);
				text-align: justify;
				line-height: 1.4;
			}
		}

		.divider-horizontal,
		.divider-vertical {
			background-color: var(--color-grey-3);
		}

		.footer-developers {
			& > ul {
				width: var(--width-1);
				max-width: var(--width-1);
				height: var(--width-1);

				flex-wrap: wrap;
				gap: var(--gap-5);
				justify-content: center;
			}
		}

		.divider-vertical {
			height: calc(var(--width-2) / 6);
		}
	}

	@media screen and (max-width: 320px) {
		gap: var(--gap-4);
		& > h3 {
			font-size: var(--paragraph-1);
		}

		& > div {
			.footer-developers {
				& > ul {
					gap: var(--gap-5);
				}
			}
		}
	}

	@media screen and (min-width: 321px) {
		& > div {
			.footer-developers {
				& > ul {
					gap: var(--gap-6);
				}
			}
		}
	}

	@media screen and (min-width: 384px) {
		& > div {
			.footer-developers > ul {
				gap: var(--gap-5);
			}
		}
	}

	@media screen and (min-width: 425px) {
		& > div {
			.footer-developers > ul {
				gap: var(--gap-4);
			}
		}
	}

	@media screen and (min-width: 540px) {
		& > div {
			.footer-developers {
				& > ul {
					gap: var(--gap-1);
				}
			}
		}
	}

	@media screen and (min-width: 768px) {
		& > div {
			flex-direction: row;
			justify-content: space-between;

			.footer-about {
				max-width: calc(var(--height-1) * 6);
			}

			.footer-developers {
				max-width: calc(var(--width-2) / 3.3);

				& > ul {
					gap: var(--gap-5);
				}
			}

			.divider-vertical {
				height: calc(var(--height-2) * 3.16);
			}
		}
	}

	@media screen and (min-width: 1024px) {
		min-height: calc(var(--height-2) * 3.35);

		& > div {
			.footer-about {
				max-width: calc(var(--width-2) / 3.57);
			}

			.divider-vertical {
				height: calc(var(--height-2) * 2.25);
			}

			.footer-developers {
				max-width: calc(var(--width-2) / 2.5);
				min-height: calc(var(--height-1) * 2.25);

				& > ul {
					justify-content: space-between;
					gap: var(--gap-3);
				}
			}
		}
	}
`;

export const StyledDevAvatar = styled.li`
	width: var(--height-3);
	height: var(--height-3);

	position: relative;

	& > a {
		max-height: var(--width-1);
		max-width: var(--width-1);

		& > img {
			width: var(--width-1);
			height: var(--width-1);

			border-radius: var(--width-1);
			border: 1px solid transparent;

			&:hover {
				border-color: var(--color-grey-1);
			}
		}
	}

	${TooltipCSS}

	@media screen and (min-width: 540px) {
		width: var(--height-2);
		height: var(--height-2);
	}
`;
