import React from "react";

import { Footer } from "../../components/Footer/Footer";
import { Carousel } from "../../components/Carousel/Carousel";
import HeaderMenu from "../../components/Header/HeaderMenu/HeaderMenu";

import { StyledHomeContainer } from "./style";
import { planetsList } from "../../components/Slider";

export const Home = () => {
	return (
		<StyledHomeContainer>
			<HeaderMenu />
			<div>
				<Carousel astroList={planetsList} />
			</div>
			<Footer />
		</StyledHomeContainer>
	);
};
