import React from "react";
import { Carousel } from "./Carousel/Carousel";
import { Footer } from "./Footer/Footer";
import { HeaderMenu } from "./HeaderMenu/HeaderMenu";
import { StyledHomeContainer } from "./style";

export const Home = () => {
	return (
		<StyledHomeContainer>
			<HeaderMenu />
			<Carousel />
			<Footer />
		</StyledHomeContainer>
	);
};
