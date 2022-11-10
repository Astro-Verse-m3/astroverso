import React from "react";

import { StyledHomeContainer } from "./style";
import { Footer } from "../../components/Footer/Footer";
import { Carousel } from "../../components/Carousel/Carousel";
import SwiperSimple from "../../components/Carousel/SwiperSimple";
import HeaderMenu from "../../components/Header/HeaderMenu/HeaderMenu";

export const Home = () => {
	return (
		<StyledHomeContainer>
			<HeaderMenu />
			<div>
				<SwiperSimple />
			</div>
			<Footer />
		</StyledHomeContainer>
	);
};
