import React from "react";

import Card from "../../components/Card/Card";
import { iCarouselProps } from "./typeCarousel";
import { Swiper, SwiperProps as iSliderProps, SwiperSlide } from "swiper/react";
import {
	Navigation,
	Pagination,
	A11y,
	EffectFade,
	Keyboard,
	Mousewheel
} from "swiper";
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/keyboard";
import "swiper/css/mousewheel";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "../Slider/Slider.css";

export const Carousel = () => {
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
		slidesPerView: 2,
		spaceBetween: 10,
		breakpoints: {
			300: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 30
			},
			1366: {
				slidesPerView: 4,
				spaceBetween: 40
			}
		}
	};

	return <></>;
};
/**
effect={"fade"}
				loop={true}
				mousewheel={true}
				navigation={true}
				draggable={true}
				keyboard={{
					enabled: true
				}}
				slidesPerView={2}
				spaceBetween={10}
				breakpoints={{
					768: {
						slidesPerView: 2,
						spaceBetween: 20
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 30
					},
					1366: {
						slidesPerView: 4,
						spaceBetween: 40
					}
				}}
				pagination={{
					clickable: true
				}}
				modules={[
					Navigation,
					Pagination,
					A11y,
					EffectFade,
					Keyboard,
					Mousewheel
				]} 


 breakpoints: {
			300: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 30
			},
			1366: {
				slidesPerView: 4,
				spaceBetween: 40
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
