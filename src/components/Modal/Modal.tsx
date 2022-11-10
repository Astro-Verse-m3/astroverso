import { PostsContext } from '../../contexts/PostsContext';

import {
  StyledModalContainer,
  StyledModalCard,
  StyledCardName,
  StyledCardContent,
  StyledBottomButtons,
} from './styles';
import { AnimatedImage } from '../3dImage/3dImage';
import { MdClose } from 'react-icons/md';
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from 'react-icons/hi';
import { BiLoaderAlt } from 'react-icons/bi';
import { useContext, useEffect, useState } from 'react';

export const Modal = () => {
  const { postsById, loading, planetPosts, setShowModal } =
    useContext(PostsContext);
  const [page, setPage] = useState(0);
  const [isNextPageDisabled, setIsNextPageDisabled] = useState(false);
  const [isPrevPageDisabled, setIsPrevPageDisabled] = useState(true);

  const nextPost = () => {
    return page === 4 ? setPage(4) : setPage(page + 1);
  };

  const prevPost = () => {
    return page === 0 ? setPage(0) : setPage(page - 1);
  };

  useEffect(() => {
    page === 0 ? setIsPrevPageDisabled(true) : setIsPrevPageDisabled(false);
    page === 4 ? setIsNextPageDisabled(true) : setIsNextPageDisabled(false);
  }, [page]);

  useEffect(() => {
    postsById(1);
  }, []);

  return (
    <StyledModalContainer>
      <StyledModalCard>
<<<<<<< HEAD
        <button className="close-button"  onClick={setShowModal(false)}>
          <MdClose />
        </button>
        <main>
           {loading ? (
=======
        <button className="close-button" onClick={setShowModal(false)}>
          <MdClose />
        </button>
        <main>
          {loading ? (
>>>>>>> feat/modalinfo
            <div className="loader-container">
              <BiLoaderAlt className="loader-img" />
            </div>
          ) : (
            <>
              <StyledCardName>
                <AnimatedImage
                  src={`${planetPosts && planetPosts[0].planetName}.glb`}
                />
                <h2>{`${planetPosts && planetPosts[0].planetName}`}</h2>
              </StyledCardName>
              <StyledCardContent>
                <h3>Curiosidade:</h3>
                <p>{planetPosts && planetPosts[page].description}</p>
              </StyledCardContent>
            </>
          )}
        </main>

        <StyledBottomButtons>
          <button onClick={() => prevPost()} disabled={isPrevPageDisabled}>
            <HiOutlineArrowNarrowLeft />
          </button>
<<<<<<< HEAD
          <button onClick={() => prevPost()} disabled={isPrevPageDisabled}>
=======
          <button onClick={() => nextPost()} disabled={isNextPageDisabled}>
>>>>>>> feat/modalinfo
            <HiOutlineArrowNarrowRight />
          </button>
        </StyledBottomButtons>
      </StyledModalCard>
    </StyledModalContainer>
  );
};
