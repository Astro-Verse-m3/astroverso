import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { devs } from "../../localData/devs";
import { StyledContainer } from "../../styles/global";
import { StyledTitle } from "../../styles/typography";
import { StyledMenuList } from "../Header/HeaderMenu/style";
import { StyledDevAvatar, StyledFooter } from "./style";

export const Footer = () => {
	const { windowSize } = useContext(UserContext);

	return (
		<StyledFooter>
			<StyledContainer>
				<div className="footer-about">
					<p>
						O <strong>AstroVerso</strong> tem como objetivo tornar o aprendizado
						sobre astronomia mais simples e interativo para você aprender e se
						divertir ao mesmo tempo!
					</p>
				</div>

				<div
					className={
						windowSize.innerWidth < 768
							? "divider-horizontal"
							: "divider-vertical"
					}
				></div>

				<div className="footer-developers">
					<StyledTitle tag="h3" fontSize="five" color="two">
						Desenvolvedores
					</StyledTitle>

					<StyledMenuList>
						{devs.map((dev, index) => (
							<StyledDevAvatar key={index}>
								<a
									href={dev.linkedin}
									className="tooltip"
									target="_blank"
									rel="noreferrer"
								>
									<img src={dev.image} alt={dev.name} title={dev.name} />
								</a>

								<small className="tooltip-text">{dev.name}</small>
							</StyledDevAvatar>
						))}
					</StyledMenuList>
				</div>
			</StyledContainer>
		</StyledFooter>
	);
};
