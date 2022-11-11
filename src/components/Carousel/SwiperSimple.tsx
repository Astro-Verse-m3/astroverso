import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Card from "../Card/Card";
import { AstrosContext } from "../../contexts/AstrosContext";

import {
  Navigation,
  Pagination,
  EffectFade,
  Keyboard,
  Mousewheel,
} from "swiper";
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/keyboard";
import "swiper/css/mousewheel";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "../Slider/Slider.css";
import { PostsContext } from "../../contexts/PostsContext";

const SwiperSimple = () => {
  const { astroList } = useContext(AstrosContext);
  const { setShowModalPost, setCurrentPlanet } = useContext(PostsContext);

  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination, Mousewheel]}
        loop={true}
        effect={"fade"}
        mousewheel={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1366: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {astroList.map((astro) => (
          <SwiperSlide key={astro.id}>
            <Card
              typeCard="astroCard"
              astroCard={astro}
              onClick={() => {
                setShowModalPost(true);
                setCurrentPlanet(astro.id);
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSimple;
