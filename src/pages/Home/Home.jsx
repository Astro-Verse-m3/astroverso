import React from "react";
import { Carousel } from "./Carousel/Carousel";
import { Header } from "./Header/Header";
import { StyledHomeContainer } from "./style";

export const Home = () => {
	return (
		<StyledHomeContainer>
			<Header />
			<Carousel />
		</StyledHomeContainer>
	);
};
