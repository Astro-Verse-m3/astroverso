import { Footer } from "../../components/Footer/Footer";
import SwiperSimple from "../../components/Carousel/SwiperSimple";
import HeaderMenu from "../../components/Header/HeaderMenu/HeaderMenu";

import { StyledHomeContainer } from "./style";
export const Home = () => {

  return (
    <>
      <StyledHomeContainer>
        <HeaderMenu />
        <div>
          <SwiperSimple />
        </div>
        <Footer />
      </StyledHomeContainer>
    </>
  );
};
