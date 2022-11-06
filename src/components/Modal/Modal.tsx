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

export const Modal = () => {
  return (
    <StyledModalContainer>
      <StyledModalCard>
        <button className="close-button">
          <MdClose />
        </button>
        <main>
          <StyledCardName>
            <AnimatedImage src="Mercury.glb" />
            <h2>Mercúrio</h2>
          </StyledCardName>
          <StyledCardContent>
            <h3>Curiosidade:</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit qui
              veritatis, nam similique ratione pariatur quidem dolorum vitae
              perferendis aspernatur doloribus incidunt in expedita repellendus
              iure fugit deleniti obcaecati nemo!
            </p>
          </StyledCardContent>
        </main>

        <StyledBottomButtons>
          <button>
            <HiOutlineArrowNarrowLeft />
          </button>
          <button>
            <HiOutlineArrowNarrowRight />
          </button>
        </StyledBottomButtons>
      </StyledModalCard>
    </StyledModalContainer>
  );
};
