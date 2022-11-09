import React from "react";

import Card from "../../components/Card/Card";
import { iCarouselProps } from "./typeCarousel";
import { Slider, Slide, iSliderProps } from "../../components/Slider";

export const Carousel = ({ astroList, quizList }: iCarouselProps) => {
	if (astroList?.length === 1 || quizList?.length === 1) {
		return (
			<>
				{astroList && <Card typeCard="astroCard" astroCard={astroList[0]} />}
				{quizList && <Card typeCard="quizCard" quizCard={quizList[0]} />}
			</>
		);
	}

	const settings: iSliderProps = {
		effect: "fade",
		mousewheel: true,
		keyboard: {
			enabled: true
		},
		navigation: true,
		pagination: {
			clickable: true
		},
		draggable: true,
		loop: true,
		slidesPerView: 1,
		spaceBetween: 10
		// breakpoints: {
		// 	640: {
		// 		slidesPerView: 2,
		// 		spaceBetween: 20
		// 	},
		// 	768: {
		// 		slidesPerView: 4,
		// 		spaceBetween: 40
		// 	},
		// 	1024: {
		// 		slidesPerView: 5,
		// 		spaceBetween: 50
		// 	}
		// }
	};

	return (
		<>
			{astroList && (
				<Slider settings={settings}>
					{astroList.map(card => (
						<Slide key={card.id}>
							<Card astroCard={card} typeCard="astroCard" />
						</Slide>
					))}
				</Slider>
			)}

			{quizList && (
				<Slider settings={settings}>
					{quizList.map(card => (
						<Slide key={card.categoryName}>
							<Card quizCard={card} typeCard="quizCard" />
						</Slide>
					))}
				</Slider>
			)}
		</>
	);
};
/**
 breakpoints: {
			640: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			768: {
				slidesPerView: 4,
				spaceBetween: 40
			},
			1024: {
				slidesPerView: 5,
				spaceBetween: 50
			}
		}
		
		breakpoints: {
		 	300: {
		 		slidesPerView: 1,
		 		navigation: false,
		 		slidesPerGroup: 1
		 	},
		 	800: {
		 		slidesPerView: 2,
		 		slidesPerGroup: 2
		 	},
		 	1200: {
		 		slidesPerView: 3,
		 		slidesPerGroup: 3
		 	}
		 }
 */
