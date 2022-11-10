import React, { useContext } from 'react';

import { Footer } from '../../components/Footer/Footer';
import SwiperSimple from "../../components/Carousel/SwiperSimple";
import HeaderMenu from '../../components/Header/HeaderMenu/HeaderMenu';

import { StyledHomeContainer } from './style';
import { planetsList } from '../../components/Slider';
import { PostsContext } from '../../contexts/PostsContext';
import { Modal } from '../../components/Modal/Modal';

export const Home = () => {
  const { showModal } = useContext(PostsContext);

  return (
    <>
      {showModal ? (
        <Modal />
      ) : (
        <>
          <StyledHomeContainer>
            <HeaderMenu />
            <div>
              	<SwiperSimple />
            </div>
            <Footer />
          </StyledHomeContainer>
        </>
      )}
    </>
  );
};
