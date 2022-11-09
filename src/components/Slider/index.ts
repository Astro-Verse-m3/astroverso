import { Slider } from "./Slider";
import { SwiperSlide, SwiperProps as iSliderProps } from "swiper/react";

export { SwiperSlide as Slide, Slider };
export type { iSliderProps };

export const planetsList = [
	{
		id: 1,
		category: "planetas",
		name: "Júpiter",
		image:
			"https://solarsystem.nasa.gov/system/feature_items/images/16_jupiter_new.png"
	},
	{
		id: 2,
		category: "planetas",
		name: "Terra",
		image:
			"https://solarsystem.nasa.gov/system/feature_items/images/17_earth.png"
	},
	{
		id: 3,
		category: "planetas",
		name: "Mercúrio",
		image:
			"https://solarsystem.nasa.gov/system/feature_items/images/18_mercury_new.png"
	},
	{
		id: 4,
		category: "planetas",
		name: "Marte",
		image:
			"https://solarsystem.nasa.gov/system/feature_items/images/19_mars.png"
	},
	{
		id: 5,
		category: "planetas",
		name: "Vênus",
		image:
			"https://solarsystem.nasa.gov/system/feature_items/images/27_venus_jg.png"
	},
	{
		id: 6,
		category: "planetas",
		name: "Saturno",
		image:
			"https://solarsystem.nasa.gov/system/feature_items/images/28_saturn.png"
	},
	{
		id: 7,
		category: "planetas",
		name: "Urano",
		image:
			"https://solarsystem.nasa.gov/system/feature_items/images/29_uranus.png"
	},
	{
		id: 8,
		category: "planetas",
		name: "Netuno",
		image:
			"https://solarsystem.nasa.gov/system/feature_items/images/30_neptune.png"
	}
];

export const starList = [
	{
		id: 1,
		category: "estrelas",
		name: "Sol",
		image:
			"https://solarsystem.nasa.gov/system/feature_items/images/805_Sun_Features_SDO_Sunspot-800x600.jpg"
	}
];
