import { Footer } from "../../components/Footer/Footer";
import SwiperSimple from "../../components/Carousel/SwiperSimple";
import HeaderMenu from "../../components/Header/HeaderMenu/HeaderMenu";

import { StyledHomeContainer } from "./style";
import { useContext } from "react";
import { PostsContext } from "../../contexts/PostsContext";
import { Modal } from "../../components/Modal/Modal";
export const Home = () => {
  const { showModalPost } = useContext(PostsContext);

  return (
    <>
      <StyledHomeContainer>
        {showModalPost ? <Modal /> : false}
        <HeaderMenu />
        <div>
          <SwiperSimple />
        </div>
        <Footer />
      </StyledHomeContainer>
    </>
  );
};
