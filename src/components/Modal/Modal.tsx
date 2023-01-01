import { PostsContext } from "../../contexts/PostsContext";

import {
  StyledModalContainer,
  StyledModalCard,
  StyledCardName,
  StyledCardContent,
  StyledBottomButtons,
} from "./styles";
import { AnimatedImage } from "../3dImage/3dImage";
import { MdClose } from "react-icons/md";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { BiLoaderAlt } from "react-icons/bi";
import { useContext, useEffect, useState } from "react";

export const Modal = () => {
  const {
    postsById,
    loading,
    planetPosts,
    setShowModalPost,
    astroName,
    currentPlanet,
  } = useContext(PostsContext);
  const [page, setPage] = useState<number>(0);
  const [isNextPageDisabled, setIsNextPageDisabled] = useState<boolean>(false);
  const [isPrevPageDisabled, setIsPrevPageDisabled] = useState<boolean>(true);

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
    postsById(currentPlanet);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledModalContainer>
      <StyledModalCard>
        <button
          className="close-button"
          onClick={() => setShowModalPost(false)}
        >
          <MdClose />
        </button>
        <main>
          {loading ? (
            <div className="loader-container">
              <BiLoaderAlt className="loader-img" />
            </div>
          ) : (
            <>
              <StyledCardName>
                <AnimatedImage src={`${astroName}.glb`} />
                <h2>{`${astroName}`}</h2>
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
          <button onClick={() => nextPost()} disabled={isNextPageDisabled}>
            <HiOutlineArrowNarrowRight />
          </button>
        </StyledBottomButtons>
      </StyledModalCard>
    </StyledModalContainer>
  );
};
