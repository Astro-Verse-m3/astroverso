import React from "react";

import { StyledHomeContainer } from "./style";
import { Footer } from "../../components/Footer/Footer";
import { Carousel } from "../../components/Carousel/Carousel";
import HeaderMenu from "../../components/Headers/HeaderMenu/HeaderMenu";

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
