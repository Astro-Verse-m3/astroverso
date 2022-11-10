import { ReactNode } from "react";
import { Swiper, SwiperProps } from "swiper/react";
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
import "./Slider.css";

interface iSliderProps {
	settings: SwiperProps;
	children: ReactNode;
}

export const Slider = ({ settings, children }: iSliderProps) => {
	return (
		<Swiper
			modules={[Navigation, Pagination, A11y, EffectFade, Keyboard, Mousewheel]}
			{...settings}
		>
			{children}
		</Swiper>
	);
};
