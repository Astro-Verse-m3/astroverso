import React, { useContext } from 'react';

import { Footer } from '../../components/Footer/Footer';
import { Carousel } from '../../components/Carousel/Carousel';
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
              <Carousel astroList={planetsList} />
            </div>
            <Footer />
          </StyledHomeContainer>
        </>
      )}
    </>
  );
};
