import logoImg from "../../assets/Astroverso.svg";
import { StyledTitle } from "../../styles/typography";
import { StyledContainerLogo } from "../Header/HeaderMenu/style";

export const Logo = () => {
	return (
		<StyledTitle tag="h1" fontSize="two">
			Astroverso
		</StyledTitle>
	);
};

export const LogoHeader = () => {
	return (
		<StyledContainerLogo>
			<img src={logoImg} alt="logo" title="logo" />
		</StyledContainerLogo>
	);
};
